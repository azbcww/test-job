# == Schema Information
#
# Table name: books
#
#  id          :bigint           not null, primary key
#  author      :string(255)
#  isbn        :string(255)
#  title       :string(255)
#  total_pages :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_id    :string(255)
#
FactoryBot.define do
  factory :book do
    author { "Jane Doe" }
    title { "Jane Doe" }
    isbn { "aaaaa" }
    total_pages {10}
  end
end
