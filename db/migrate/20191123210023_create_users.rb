class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :fitbit_id
      t.date :last_login
      t.string :username

      t.string :access_token
      t.string :refresh_token

      t.timestamps
    end
  end
end
