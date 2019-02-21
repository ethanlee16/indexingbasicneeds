class AddCategoryToResourceTag < ActiveRecord::Migration[5.1]
  def change
    add_column :resource_tags, :category, :integer, default: 0
  end
end
