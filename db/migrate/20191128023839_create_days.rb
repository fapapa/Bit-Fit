class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.integer :avg_heart_rate
      t.integer :calories
      t.integer :steps
      t.date :stats_date

      t.timestamps
    end
  end
end
