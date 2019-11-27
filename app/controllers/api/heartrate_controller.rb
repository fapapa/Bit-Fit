class Api::HeartrateController < ApplicationController
  def index
    return not_authenticated unless current_user

    render json: current_user.calories_burned
  end

  def period
    return not_authenticated unless current_user

    render json: current_user.average_heartrate('today', params[:period])
  end

  private

  def current_user
    return false unless session[:user_id]

    User.find(session[:user_id])
  end

  def not_authenticated
    render json: {
             error: 'Not authenticated',
             status: 401
           }, status: 401
  end
end
