require 'httparty'
require 'base64'

class Fitbit
  def self.get_tokens(code)
    query = {
      'clientId' => client_id,
      'grant_type' => 'authorization_code',
      'redirect_uri' => redirect_uri,
      'code' => code
    }
    res = make_request(query)
    JSON.parse(res, symbolize_names: true)
  end
 
  def self.refresh_tokens
    query = {
      'clientId' => client_id,
      'grant_type' => 'refresh_token',
      'refresh_token' => refresh_token
    }
    res = make_request(query)
    JSON.parse(res, symbolize_names: true)
  end

  private

  def self.client_id
    Rails.application.credentials.config[:client_id]
  end

  def self.client_secret
    Rails.application.credentials.config[:client_secret]
  end

  def self.auth_code
    Base64.encode64("#{client_id}:#{client_secret}")
  end

  def self.redirect_uri
    Rails.application.credentials.config[:redirect_uri]
  end

  def self.headers
    {
      'Authorization' => "Basic #{auth_code}",
      'Content-Type' => 'application/x-www-form-urlencoded'
    }
  end

  def self.make_request(query)
    HTTParty.post(
      'https://api.fitbit.com/oauth2/token',
      query: query,
      headers: headers,
      format: :plain
    )
  end
end