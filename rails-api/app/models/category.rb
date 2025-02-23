class Category < ApplicationRecord
  has_many :book_categories
  has_many :books, through: :book_categories
  has_many :exp_logs

  validates :category, presence: true, uniqueness: true
end
