# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
monty = User.create(first_name: "monty", last_name: "burns", username: "monty b.", fitbit_id: "7WYXQM")
monty.create_fitogachi(name: "gump", level: 2, current_exp: 600, last_experience: 100)

john = User.create(first_name: "John", last_name: "Barratt", username: "john b.", fitbit_id: "57BJNZ")
john.create_fitogachi(name: "coke", level: 6, current_exp: 2500, last_experience: 2500, current_energy: 3.5)

james = User.create(first_name: "James", last_name: "Marshall", username: "james b.", fitbit_id: "7WZFJM")
james.create_fitogachi(name: "pepsi", level: 6, current_exp: 2500, last_experience: 2500, current_energy: 2)

fabio = User.create(first_name: "Fabio", last_name: "Papa", username: "fabio p.", fitbit_id: "7WNPS2")
fabio.create_fitogachi(name: "vito gachi", current_energy: 0)

User.all.each  do |u|
  ((1.year.ago.to_date)..(Date.today.to_date)).to_a.each do |date|
    u.days.create(
      avg_heart_rate: Random.rand(50...80),
      calories: Random.rand(2_000...2_500),
      steps: Random.rand(2_000...16_000),
      stats_date: date
    )
  end
end



show_battle = Battle.create(creator_id: john.id, opponent_id: james.id, winner_id: john.id, start_date: 7.days.ago, end_date: 5.days.ago, accepted: true, viewed_accepted: true, creator_viewed: false, opponent_viewed: false)
Battle.create(creator_id: 1, opponent_id: 3, winner_id: 1, start_date: 6.days.ago, end_date: 4.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 1, opponent_id: 4, winner_id: 1, start_date: 4.days.ago, end_date: 2.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 1, opponent_id: 6, winner_id: 1, start_date: 10.days.ago, end_date: 8.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 2, opponent_id: 3, winner_id: 2, start_date: 9.days.ago, end_date: 7.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 2, opponent_id: 5, winner_id: 1, start_date: 9.days.ago, end_date: 7.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 2, opponent_id: 6, winner_id: 1, start_date: 8.days.ago, end_date: 6.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 3, opponent_id: 1, winner_id: 2, start_date: 10.days.ago, end_date: 8.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 3, opponent_id: 2, winner_id: 2, start_date: 5.days.ago, end_date: 3.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 3, opponent_id: 6, winner_id: 1, start_date: 10.days.ago, end_date: 8.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 3, opponent_id: 4, winner_id: 1, start_date: 4.days.ago, end_date: 2.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 4, opponent_id: 1, winner_id: 2, start_date: 10.days.ago, end_date: 8.day.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
Battle.create(creator_id: 4, opponent_id: 6, winner_id: 1, start_date: 3.days.ago, end_date: 1.day.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
# Battle.create(creator_id: 5, opponent_id: 1, winner_id: 1, start_date: 3.days.ago, end_date: 1.day.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
# Battle.create(creator_id: 5, opponent_id: 4, winner_id: 1, start_date: 9.days.ago, end_date: 7.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
# Battle.create(creator_id: 5, opponent_id: 6, winner_id: 1, start_date: 6.days.ago, end_date: 4.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
# Battle.create(creator_id: 6, opponent_id: 3, winner_id: 1, start_date: 4.days.ago, end_date: 2.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
# Battle.create(creator_id: 6, opponent_id: 5, winner_id: 1, start_date: 7.days.ago, end_date: 5.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
# Battle.create(creator_id: 6, opponent_id: 4, winner_id: 1, start_date: 6.days.ago, end_date: 4.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)

creator_calories = show_battle.creator.calorie_total(show_battle.start_date, show_battle.end_date)
opponent_calories = show_battle.opponent.calorie_total(show_battle.start_date, show_battle.end_date)
show_battle.winner = creator_calories > opponent_calories ? show_battle.creator : show_battle.opponent
show_battle.save