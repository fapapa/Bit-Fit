class Api::DaysController < Api::ApiController
  def show
    render json: current_user.days_for(params[:period]).to_json(
             only: [:calories, :stats_date]
           )
  end
end
