# == Schema Information
#
# Table name: exp_logs
#
#  id          :bigint           not null, primary key
#  earned_at   :date
#  exp_points  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  user_id     :bigint           not null
#
# Indexes
#
#  index_exp_logs_on_category_id  (category_id)
#  index_exp_logs_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (user_id => users.id)
#
class ExpLog < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :exp_points, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :earned_at, presence: true
end
