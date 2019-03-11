class AddDescriptionToResourceCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :resource_categories, :description, :text
  end
end
