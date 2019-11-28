FactoryBot.define do
  factory :fitogachi do
    user { nil }
    name { "MyString" }
    color { "MyString" }
    level { 1 }
    current_exp { 1 }
    current_energy { 1 }
    died_on { "2019-11-27" }
    resurrection_days { 1 }
    last_experience { 1 }
  end
end
