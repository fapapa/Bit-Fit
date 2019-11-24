require 'httparty'

class Fitbit
  def self.get_tokens(code)
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

    JSON.parse(res, symbolize_names: true)
  end
 
  def self.refresh_tokens
    config = Rails.application.credentials.config
    client_id = config[:client_id]
    client_secret = config[:client_secret]
    auth_code = Base64.encode64("#{client_id}:#{client_secret}")

    query = {
      'clientId' => client_id,
      'grant_type' => 'refresh_token',
      'refresh_token' => refresh_token
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

    JSON.parse(res, symbolize_names: true)
  end
end