FactoryBot.define do
  factory :token do
    access_token { "MyString" }
    refresh_token { "MyString" }
    user { nil }
  end
end
