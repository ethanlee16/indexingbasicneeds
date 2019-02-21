class AddDescriptionToResource < ActiveRecord::Migration[5.1]
  def change
    add_column :resources, :description, :text
  end
end
