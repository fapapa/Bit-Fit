class Fitogachi < ApplicationRecord
  belongs_to :user

  BONUS_MULTIPLE = 100
  BONUS_POINTS = 10
  
  def current_experience
    points = 0
    calories = user.get_active_calories
    if calories >= 500
      points += 100
      points += ((calories - 500) / BONUS_MULTIPLE) * BONUS_POINTS
    end
    points > 150 ? 150 : points
  end
end
