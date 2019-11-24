class Token < ApplicationRecord
  belongs_to :user
  def current?
    
    updated_at > DateTime.now.new_offset(8) - 8.hours
  end


end