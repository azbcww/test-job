class AddDefaultToUserBooksCurrentPages < ActiveRecord::Migration[6.1]
  def change
    change_column_default :user_books, :current_pages, 0
  end
end
