FactoryBot.define do
  factory :user do
    name { "a" }
    email { "a@a.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
