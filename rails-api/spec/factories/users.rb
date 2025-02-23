FactoryBot.define do
  factory :user do
    email { "a@a.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
