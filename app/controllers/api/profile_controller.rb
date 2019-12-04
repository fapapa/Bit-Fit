class Api::ProfileController < Api::ApiController
  def index
    render json: current_user.fitbit_profile
  end

  def user_data
    render json: current_user, include: [:fitogachi]
  end
end
