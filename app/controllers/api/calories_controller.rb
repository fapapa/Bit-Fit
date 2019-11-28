class Api::CaloriesController < Api::ApiController
  def index
    render json: current_user.get_active_calories
  end

  def period
    render json: current_user.calories_burned('today', params[:period])
  end
end
