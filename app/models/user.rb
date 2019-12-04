# frozen_string_literal: true

require 'base64'
require 'httparty'

class User < ApplicationRecord
  has_one :token, dependent: :destroy
  has_one :fitogachi, dependent: :destroy
  has_many :days, dependent: :destroy
  has_many :created_battles, foreign_key: "creator_id", class_name: "Battle"
  has_many :opponent_battles, foreign_key: "opponent_id", class_name: "Battle"
  has_many :winner_battles, foreign_key: "winner_id", class_name: "Battle"

  def battle_notifications
    @notifications ||= created_battles.where(accepted: true, viewed_accepted: false).count +
      created_battles.where("end_date < :today AND creator_viewed = FALSE", {today: Date.today}).count +
      opponent_battles.where("start_date > :today AND accepted = FALSE", {today: Date.today}).count +
      opponent_battles.where("end_date < :today AND opponent_viewed = FALSE", {today: Date.today}).count
  end

  def calories_burned(date = 'today', period = '1d')
    calories = activities('tracker/calories', date, period)['activities-tracker-calories']
    calories.size > 1 ? calories : calories[0]
  end

  def battle_calories(user_id, base_date, end_date)
    calories = battle_activities(user_id, 'tracker/calories', base_date, end_date)['activities-tracker-calories']
  end

  def get_active_calories(date = 'today')
    return active_calories = goal(date)['summary']['activityCalories']
  end

  def get_friends
    friend_ids = friends['data'].map { |friend| friend['id'] }
    User.includes(:fitogachi).where(fitbit_id: friend_ids)
  end

  def search_friends(name)
    found_user = User.find_by(first_name: name)
    friends_arr = friends['data']
    is_friend = friends_arr.each { |n|
      return found_user unless n['id'] != found_user['fitbit_id']
    }
  end

  def get_foe
    fitogachi_list = (Fitogachi.where(died_on: nil).ids && Fitogachi.where.not(user_id: id))
    fitogachi_list.sample.user
  end

  def steps_taken(date = 'today', period = '1d')
    steps = activities('tracker/steps', date, period)['activities-tracker-steps']
    steps.size > 1 ? steps : steps[0]["value"]
  end

  def average_heartrate(date = 'today', period = '1d')
    heart_rate = activities('heart', date, period)['activities-heart']
    fat_burn = heart_rate[0]['value']['heartRateZones'][1]
    return average = (fat_burn["max"] + fat_burn["min"]) / 2
  end

  def days_for(period)
    return [] unless %w(week month year).include?(period)

    beginning = 1.send(period).ago.to_date
    if period == "year"
      days.select("EXTRACT(YEAR FROM stats_date) as year, EXTRACT(MONTH FROM stats_date) as month, SUM(calories) as calories")
        .where(stats_date: beginning..Date.today)
        .group("EXTRACT(YEAR from stats_date), EXTRACT(MONTH from stats_date)")
        .order("year, month")
    else
      days.where(stats_date: beginning..Date.today).order("stats_date")
    end
  end

  def fitbit_profile
    @profile ||= HTTParty.get(
      "https://api.fitbit.com/1/user/-/profile.json",
      headers: headers
    ).parsed_response["user"]
  end

  def refresh_token
    new_tokens = Fitbit.refresh_tokens(token.refresh_token)

    token.access_token = new_tokens[:access_token]
    token.refresh_token = new_tokens[:refresh_token]

    token.save
  end

  def reap
    data = HTTParty.get(
      "https://api.fitbit.com/1/user/-/activities/date/#{Date.yesterday.strftime}.json",
      headers: headers
    ).parsed_response["summary"]

    days.create(
      calories: data["activityCalories"],
      steps: data["steps"],
      stats_date: Date.yesterday
    )

    if data["activityCalories"] < 500
      fitogachi.current_energy -= 1.0
    else
      fitogachi.current_energy += 0.5
    end
    fitogachi.current_experience
    fitogachi.save
  end

  def calorie_total(start_date, end_date)
    days.where(stats_date: start_date..end_date).sum(&:calories)
  end

  def self.fitbit_auth(code)
    tokens = Fitbit.get_tokens(code)

    access_token = tokens[:access_token]
    refresh_token = tokens[:refresh_token]

    profile = HTTParty.get(
      'https://api.fitbit.com/1/user/-/profile.json',
      headers: {'Authorization' => "Bearer #{access_token}"}
    )
    parsed_profile = profile.parsed_response['user']

    user = find_or_create_by(fitbit_id: parsed_profile['encodedId']) do |user|
      user.first_name = parsed_profile['firstName']
      user.last_name = parsed_profile['lastName']
      user.last_login = Time.now
      user.username = parsed_profile['displayName']
      user.fitbit_id = parsed_profile['encodedId']
    end
    user.create_token(access_token: access_token, refresh_token: refresh_token)
    return user
  end

  private

  def activities(resource_path, date, period)
    HTTParty.get(
      "https://api.fitbit.com/1/user/-/activities/#{resource_path}/date/#{date}/#{period}.json",
      headers: headers
    ).parsed_response
  end

  def battle_activities(user_id, resource_path, base_date, end_date)
    HTTParty.get(
      "https://api.fitbit.com/1/user/#{user_id}/activities/#{resource_path}/date/#{base_date}/#{end_date}.json",
      headers: headers
    ).parsed_response
  end

  def goal(date)
    HTTParty.get(
      "https://api.fitbit.com/1/user/-/activities/date/#{date}.json",
      headers: headers
    ).parsed_response
  end

  def friends
    HTTParty.get(
      "https://api.fitbit.com/1.1/user/-/friends.json",
      headers: headers
    ).parsed_response
  end


  def headers
    {'Authorization' => "Bearer #{token.access_token}"}
  end
end
