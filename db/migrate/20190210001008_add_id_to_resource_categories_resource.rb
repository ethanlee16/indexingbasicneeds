class AddIdToResourceCategoriesResource < ActiveRecord::Migration[5.1]
  def change
    add_column :resource_categories_resources, :id, :primary_key
  end
end
