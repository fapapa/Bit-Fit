class Api::ExperienceController < Api::ApiController

  def index
    render json: current_user.fitogachi.current_experience
  end

end