class User < ApplicationRecord
end
class User < ApplicationRecord
  has_secure_password

  has_many :user_books
  has_many :books, through: :user_books
  has_many :reading_logs
  has_many :exp_logs

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
