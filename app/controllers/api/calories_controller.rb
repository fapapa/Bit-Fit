class Api::CaloriesController < Api::ApiController
  def index
    render json: current_user.calories_burned
  end

  def period
    render json: current_user.calories_burned('today', params[:period])
  end
end
