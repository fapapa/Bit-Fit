class Api::StepsController < Api::ApiController
  def index
    render json: current_user.steps_taken
  end
end
