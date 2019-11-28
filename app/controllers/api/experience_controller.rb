class Api::ExperienceController < Api::ApiController
  
  def index
    render json: current_user
  end

end