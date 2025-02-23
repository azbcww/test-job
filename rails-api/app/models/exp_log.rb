class ExpLog < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :exp_points, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :earned_at, presence: true
end
