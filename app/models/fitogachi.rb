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

  def current_energy=(value)
    if value < 0
      super(0)
      self.died_on = Date.today
    elsif value > 5
      super(5)
    else
      super(value)
    end
  end
end
