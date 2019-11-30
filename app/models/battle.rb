class Battle < ApplicationRecord
  belongs_to :creator, class_name: "User"
  belongs_to :opponent, class_name: "User"
  belongs_to :winner, class_name: "User"



  def battle_results(id)
    @battle = Battle.find(id)
    opponent = User.find(@battle.opponent_id)
    creator = User.find(@battle.creator_id)
    results = {
              winner: [],
              users:  [],
              days: []
              }

    # determines largest calories burned between data by either user
    opponent_max = sum_calories(days_opponent_calories)
    creator_max = sum_calories(days_creator_calories)
    max = creator_max > opponent_max ? creator_max : opponent_max

    #gets users calorie percentage for day 
    opponent_daily_score = daily_calories(days_opponent_calories, max)
    creator_daily_score = daily_calories(days_creator_calories, max)

    #stacks each day with opponent and creator percentages.
    match_up = day_match_ups(creator_daily_score, opponent_daily_score)


    results[:winner].push(is_winner)
    results[:users].push(get_fitogachi(creator))
    results[:users].push(get_fitogachi(opponent))
    results[:days] = match_up
    return results
  end

  def daily_calories(days, maximum)
    day_arr = []
    days.each { |day| day_arr.push(((day['value'].to_i) * 100 / maximum).floor)}
    day_arr
  end

  def day_match_ups(creator_arr, opponent_arr)
    new_arr = creator_arr.zip(opponent_arr)
    new_arr.reverse
  end

  def is_winner
    @battle.winner == @battle.creator ? 1 : 2
  end

  def get_fitogachi(user)
    fitogachi_arr = []
    fitogachi_arr.push(user.fitogachi.name)
    fitogachi_arr.push(user.fitogachi.level)
    fitogachi_arr.push(user.fitogachi.color)
  end

  def days_creator_calories
    creator.battle_calories(creator.fitbit_id, @battle.start_date, @battle.end_date)
  end

  def days_opponent_calories
    opponent.battle_calories(opponent.fitbit_id, @battle.start_date, @battle.end_date)
  end

  def sum_calories(days)
    sum = 0
    days.each { |day| sum += day['value'].to_i }
    sum
  end
end
