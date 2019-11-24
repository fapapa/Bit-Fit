class SessionsController < ApplicationController
  def new
    config = Rails.application.credentials.config
    client_id = config[:client_id]
    scopes = config[:scopes]
    redirect_uri = config[:redirect_uri]

    query = {
      redirect_uri: redirect_uri,
      response_type: 'code',
      client_id: client_id,
      scope: scopes
    }.to_query
    redirect_to "https://www.fitbit.com/oauth2/authorize?#{query}"
  end

  def create
    @user = User.fitbit_auth(params[:code])

    session[:user_id] = @user.id
    redirect_to root_path
  end

  def logout
    session[:user_id] = nil
    render html: 'logout'
  end
end
