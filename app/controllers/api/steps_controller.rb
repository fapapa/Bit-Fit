class Api::StepsController < ApplicationController
  before_action :require_authentication

  def index
    render json: current_user.steps_taken
  end

  private

  def require_authentication
    render(not_authenticated, status: 401) unless current_user
  end

  def current_user
    return false unless session[:user_id]

    @user ||= User.find(session[:user_id])
  end

  def not_authenticated
    {json: {
       error: 'Not authenticated',
       status: 401
     }}
  end
end
