class CreateBattles < ActiveRecord::Migration[6.0]
  def change
    create_table :battles do |t|
      t.references :creator, null: false, foreign_key: {to_table: :users}
      t.references :opponent, null: false, foreign_key: {to_table: :users}
      t.references :winner, null: false, foreign_key: {to_table: :users}
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
