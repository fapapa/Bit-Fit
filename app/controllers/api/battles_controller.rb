class Api::BattlesController < Api::ApiController
  def battleData
    render json: current_user
  end

  def notifications
    render json: current_user.battle_notifications
  end
end
