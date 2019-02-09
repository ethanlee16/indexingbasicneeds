class CreateJoinTableResourceResourceCategory < ActiveRecord::Migration[5.1]
  def change
    create_join_table :resources, :resource_categories do |t|
      t.index [:resource_category_id, :resource_id], name: "index_resource_and_resource_categories"
    end
  end
end
