class Api::BattlesController < Api::ApiController
  def battleData
    @battle = Battle.find(params[:id])
    render json: @battle.battle_results(params[:id])
  end

  def notifications
    render json: current_user.battle_notifications
  end
end
