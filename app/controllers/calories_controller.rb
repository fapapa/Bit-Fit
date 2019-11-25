class CaloriesController < ApplicationController
  def index
    render json: {
             error: "Not authenticated",
             status: 401
           }, status: 401 unless session[:user_id]

    @user = User.find(session[:user_id])
    render json: @user.calories_burned
  end
end
