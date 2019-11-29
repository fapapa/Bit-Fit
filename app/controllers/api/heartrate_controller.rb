class Api::HeartrateController < Api::ApiController
  def index
    render json: current_user.average_heartrate
  end

  def period
    render json: current_user.average_heartrate('today', params[:period])
  end
end
