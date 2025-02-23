class UserBook < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :current_pages, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
