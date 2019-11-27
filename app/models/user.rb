# frozen_string_literal: true

require 'base64'
require 'httparty'

class User < ApplicationRecord
  has_one :token, dependent: :destroy


  def calories_burned(date = 'today', period = '1d')
    calories = activities('tracker/calories', date, period)['activities-tracker-calories']
    calories.size > 1 ? calories : calories[0]
  end


  def calories_daily_goal(period = 'daily')
    calories = goals(period)['goals']['caloriesOut']
  end


  def steps_taken(date = 'today', period = '1d')
    steps = activities('tracker/steps', date, period)['activities-tracker-steps']
    steps.inject(0) do |sum, day|
      sum + day['value'].to_i
    end
  end


  def steps_daily_goal(period = 'daily')
    steps = goals(period)['goals']['steps']
  end


  def average_heartrate(date = 'today', period = '1d')
    heart_rate = activities('heart', date, period)['activities-heart']
    fat_burn = heart_rate[0]['value']['heartRateZones'][1]
    return average = (fat_burn["max"] + fat_burn["min"]) / 2
  end


  def refresh_token
    new_tokens = Fitbit.refresh_tokens(token.refresh_token)

    token.access_token = new_tokens[:access_token]
    token.refresh_token = new_tokens[:refresh_token]

    token.save
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
    end
    user.create_token(access_token: access_token, refresh_token: refresh_token)
    return user
  end

  private

  def activities(resource_path, date, period)
    HTTParty.get(
      "https://api.fitbit.com/1/user/-/activities/#{resource_path}/date/#{date}/#{period}.json",
      headers: {'Authorization' => "Bearer #{token.access_token}"}
    ).parsed_response
  end

  def goals(period)
    HTTParty.get(
      "https://api.fitbit.com/1/user/-/activities/goals/#{period}.json",
      headers: {'Authorization' => "Bearer #{token.access_token}"}
    ).parsed_response
  end

end
