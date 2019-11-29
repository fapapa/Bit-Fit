class Api::BattlesController < Api::ApiController
  def battleData
    render json: current_user
  end
end
