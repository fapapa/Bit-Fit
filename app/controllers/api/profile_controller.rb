class Api::ProfileController < Api::ApiController
  def index
    render json: current_user.fitbit_profile
  end
end
