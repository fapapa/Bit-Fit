class ChangeColumnDefaultFitogachis < ActiveRecord::Migration[6.0]
  def change
    change_column_default :fitogachis, :current_energy, from: 0, to: 5
    add_column :fitogachis, :color, :integer, default: 0
  end
end

