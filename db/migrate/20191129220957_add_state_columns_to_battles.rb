class AddStateColumnsToBattles < ActiveRecord::Migration[6.0]
  def change
    add_column :battles, :accepted, :boolean, default: false
    add_column :battles, :viewed_accepted, :boolean, default: false
    add_column :battles, :creator_viewed, :boolean, default: false
    add_column :battles, :opponent_viewed, :boolean, default: false
  end
end
