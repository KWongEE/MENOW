class CreateCat < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :location, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
