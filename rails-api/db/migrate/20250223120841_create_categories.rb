class CreateCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :categories do |t|
      t.string :category

      t.timestamps
    end
    add_index :categories, :category, unique: true
  end
end
