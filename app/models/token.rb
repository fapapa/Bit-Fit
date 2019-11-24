# frozen_string_literal: true

class Token < ApplicationRecord
  belongs_to :user

  TOKEN_EXPIRY = 8.hours
  UTC_OFFSET = 8

  def current?
    updated_at > DateTime.now.new_offset(UTC_OFFSET) - TOKEN_EXPIRY
  end
end
