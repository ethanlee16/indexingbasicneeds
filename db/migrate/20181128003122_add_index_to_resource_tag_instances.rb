class AddIndexToResourceTagInstances < ActiveRecord::Migration[5.1]
  def change
    add_index :resource_tag_instances, [:resource_id, :resource_tag_id], unique: true
  end
end
