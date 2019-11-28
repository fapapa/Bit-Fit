class CreateFitogachis < ActiveRecord::Migration[6.0]
  def change
    create_table :fitogachis do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :color
      t.integer :level
      t.integer :current_exp
      t.integer :current_energy
      t.date :died_on
      t.integer :resurrection_days
      t.integer :last_experience

      t.timestamps
    end
  end
end
