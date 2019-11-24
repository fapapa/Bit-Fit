class CreateTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :tokens do |t|
      t.string :access_token
      t.string :refresh_token
      t.references :user, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
    remove_column :users, :access_token, :string
    remove_column :users, :refresh_token, :string

  end
end
