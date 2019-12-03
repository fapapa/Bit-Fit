class Api::BattlesController < Api::ApiController
  def index
    render json: {
             current: Battle.current(current_user).to_json(
               include: {
                 creator: {include: [:fitogachi]},
                 opponent: {include: [:fitogachi]}
               }),
             history: Battle.history(current_user).to_json(
               include: {
                 creator: {include: [:fitogachi]},
                 opponent: {include: [:fitogachi]}
               }),
             challenges: Battle.challenges(current_user).to_json(
               include: {
                 creator: {include: [:fitogachi]},
                 opponent: {include: [:fitogachi]}
               })
           }
  end

  def update
    battle = current_user.opponent_battles.find(params[:id])

    battle.start_date = Date.tomorrow
    battle.end_date = Date.tomorrow + 2.days
    render json: battle if battle.save
  end

  def battle_data
    # @battle = Battle.find(params[:id])
    # render json: @battle.battle_results(params[:id])
    render json: {winner: 1, users: [["Jake", 6, '0deg'],["John", 6, '0deg']], days: [[25, 25],[75, 50]]}
  end

  def notifications
    render json: current_user.battle_notifications
  end

  def create_battle
    battle = current_user.created_battles.create(opponent: current_user.get_foe)
    render json: battle, include: {opponent: {only: :username}}
  end
end
