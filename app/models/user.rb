require 'base64'
require 'httparty'

class User < ApplicationRecord
  has_one :token, dependent: :destroy

  def calories_burned(date='today', period='1d')
    calories = activities('tracker/calories', date, period)['activities-tracker-calories']
    calories.inject(0) do |sum,day|
      sum += day['value'].to_i
    end
  end

  def steps_taken(date='today', period='1d')
    steps = activities('tracker/steps', date, period)['activities-tracker-steps']
    steps.inject(0) do |sum,day|
      puts day['dateTime']
      sum += day['value'].to_i
    end
  end

  def refresh_token
    parsed_response = Fitbit.refresh_tokens(token.refresh_token)
    access_token = parsed_response[:access_token]
    refresh_token = parsed_response[:refresh_token]

    save
  end

  def self.fitbit_auth(code)
    parsed_response = Fitbit.get_tokens(code)

    access_token = parsed_response[:access_token]
    refresh_token = parsed_response[:refresh_token]

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
end
