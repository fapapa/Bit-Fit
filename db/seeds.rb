# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.first
((1.year.ago.to_date)..(Date.today.to_date)).to_a.each do |date|
  u.days.create(
    avg_heart_rate: Random.rand(50...80),
    calories: Random.rand(2_000...2_500),
    steps: Random.rand(2_000...16_000),
    stats_date: date
  )
end

Battle.create(creator_id: 1, opponent_id: 2, winner_id: 1, start_date: 7.days.ago, end_date: 5.days.ago, accepted: true, viewed_accepted: true, creator_viewed: true, opponent_viewed: true)
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
