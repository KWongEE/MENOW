class AddLatLngToCat < ActiveRecord::Migration[5.2]
  def change
    add_column :cats, :lat, :float
    add_column :cats, :lng, :float
  end
end
