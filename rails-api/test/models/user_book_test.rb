# == Schema Information
#
# Table name: user_books
#
#  id            :bigint           not null, primary key
#  current_pages :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  book_id       :bigint           not null
#  user_id       :bigint           not null
#
# Indexes
#
#  index_user_books_on_book_id  (book_id)
#  index_user_books_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (book_id => books.id)
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class UserBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
