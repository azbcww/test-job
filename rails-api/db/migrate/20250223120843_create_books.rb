class CreateBooks < ActiveRecord::Migration[8.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :image_id
      t.integer :total_pages

      t.timestamps
    end
  end
end
