class ReaperJob < ApplicationJob
  queue_as :default

  def perform
    # Get previous day calories and steps, and create a day object for the
    # user. Also adjust their fitogachi's current energy based on the calories
    # they burned, and have them die if energy goes below zero
    users = User.all
    users.each do |user|
      user.reap
    end

    # Find completed battles that haven't had a verdict yet, and judge them
    battles = Battle.where.not(start_date: nil).
                where("end_date < :today", {today: Date.today}).where(winner: nil)
    battles.each do |battle|
      creator_calories =
        battle.creator.calorie_total(battle.start_date, battle.end_date)
      opponent_calories =
        battle.opponent.calorie_total(battle.start_date, battle.end_date)

      battle.winner = creator_calories > opponent_calories ? battle.creator
                      : battle.opponent
      battle.save
    end

    enqueue_next
  end

  def enqueue_next
    next_job_time = Date.tomorrow.at_midnight + 8.hours
    ReaperJob.set(wait_until: next_job_time).perform_later
  end
end
