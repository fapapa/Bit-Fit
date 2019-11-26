class Api::StepsController < Api::ApiController
  def index
    render json: current_user.steps_taken
  end

  def period
    render json: current_user.steps_taken('today', params[:period])
  end
end
