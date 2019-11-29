class Api::FitogachiController < Api::ApiController
  def show
    render json: current_user.fitogachi
  end
end
