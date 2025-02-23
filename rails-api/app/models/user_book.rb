class UserBook < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :current_pages, presence: true, numericality: { greater_than_or_equal_to: 0 }

  after_initialize :set_default_current_pages

  private

  def set_default_current_pages
    self.current_pages ||= 0
  end
end
