class ChangeCurrentEnergyColumnToFloat < ActiveRecord::Migration[6.0]
  def change
    change_column :fitogachis, :current_energy, :float
  end
end
