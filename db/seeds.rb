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
