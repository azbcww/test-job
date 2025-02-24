# == Schema Information
#
# Table name: books
#
#  id          :bigint           not null, primary key
#  author      :string(255)
#  title       :string(255)
#  total_pages :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_id    :string(255)
#
require "test_helper"

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
