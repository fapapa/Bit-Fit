class ChangeColumnDefault < ActiveRecord::Migration[6.0]
  def change
    remove_column :fitogachis, :color
    change_column_default :fitogachis, :level, from: nil, to: 1
    change_column_default :fitogachis, :current_energy, from: nil, to: 5
  end
end
