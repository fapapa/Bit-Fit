class ChangeWinnerIdColumnOnBattlesToBeOptional < ActiveRecord::Migration[6.0]
  def change
    change_column_null :battles, :winner_id, true
  end
end
