FactoryBot.define do
  factory :user do
    full_name { "MyString" }
    email { "MyString" }
    last_login { "2019-11-23" }
    username { "MyString" }
    authentication_token { "MyString" }
    refresh_token { "MyString" }
  end
end
