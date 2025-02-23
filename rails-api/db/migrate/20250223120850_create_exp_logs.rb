class CreateExpLogs < ActiveRecord::Migration[8.0]
  def change
    create_table :exp_logs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.integer :exp_points
      t.date :earned_at

      t.timestamps
    end
  end
end
