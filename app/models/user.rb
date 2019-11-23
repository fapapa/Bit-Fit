require 'base64'
require 'httparty'

class User < ApplicationRecord
  def self.fitbit_auth(code)
    config = Rails.application.credentials.config
    client_id = config[:client_id]
    client_secret = config[:client_secret]
    redirect_uri = config[:redirect_uri]
    auth_code = Base64.encode64("#{client_id}:#{client_secret}")

    query = {
      'clientId' => client_id,
      'grant_type' => 'authorization_code',
      'redirect_uri' => redirect_uri,
      'code' => code
    }

    headers = {
      'Authorization' => "Basic #{auth_code}",
      'Content-Type' => 'application/x-www-form-urlencoded'
    }

    res = HTTParty.post(
      'https://api.fitbit.com/oauth2/token',
      query: query,
      headers: headers,
      format: :plain
    )

    parsed_response = JSON.parse(res, symbolize_names: true)
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
      user.access_token = access_token
      user.refresh_token = refresh_token
    end

    return user
  end
end
