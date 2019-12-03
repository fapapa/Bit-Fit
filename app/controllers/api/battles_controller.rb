class Api::BattlesController < Api::ApiController
  def battle_data
    # @battle = Battle.find(params[:id])
    # render json: @battle.battle_results(params[:id])
    render json: {winner: 1, users: [["Jake", 6, '0deg'],["John", 6, '0deg']], days: [[25, 25],[75, 50]]}
  end

  def notifications
    render json: current_user.battle_notifications
  end

  def create_battle
    battle = current_user.created_battles.build(opponent: current_user.get_foe)
    render json: battle
  end
end
