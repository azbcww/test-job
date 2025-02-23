class Book < ApplicationRecord
  has_many :book_categories
  has_many :categories, through: :book_categories
  has_many :user_books
  has_many :users, through: :user_books
  has_many :reading_logs

  has_one_attached :image

  validates :title, presence: true
  validates :author, presence: true
  validates :total_pages, presence: true, numericality: { greater_than: 0 }
end
