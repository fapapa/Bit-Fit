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

  def current 
    render json: Battle.current(current_user).to_json(
      include: {
        creator: {include: [:fitogachi]},
        opponent: {include: [:fitogachi]}
      })
  end

  def history
    render json: Battle.history(current_user).to_json(
      include: {
        creator: {include: [:fitogachi]},
        opponent: {include: [:fitogachi]}
      })
  end

  def update
    battle = current_user.opponent_battles.find(params[:id])

    battle.start_date = Date.tomorrow
    battle.end_date = Date.tomorrow + 2.days
    render json: battle if battle.save
  end

  def battle_data
     @battle = Battle.find(params[:id])
     render json: @battle.battle_results(params[:id], current_user)
  end

  def notifications
    render json: current_user.battle_notifications
  end

  def create_battle
    opponent = params[:battle][:opponent_id] ?
                 User.find(params[:battle][:opponent_id]) :
                 current_user.get_foe

    battle = current_user.created_battles.create(opponent: opponent)
    render json: battle, include: {opponent: {only: :username}}
  end
end
