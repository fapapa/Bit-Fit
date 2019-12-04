class SessionsController < ApplicationController
  def new
    config = Rails.application.credentials.config
    client_id = config[:client_id]
    scopes = "activity profile heartrate social"
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
    if @user.fitogachi
      redirect_to root_path
    else
      redirect_to new_fitogachi_path
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to action: :goodbye
  end

  def goodbye
  end
end
