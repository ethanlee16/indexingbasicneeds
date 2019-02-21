class CreateResourceTagInstances < ActiveRecord::Migration[5.1]
  def change
    create_table :resource_tag_instances do |t|
      t.references :resource, foreign_key: true
      t.references :resource_tag, foreign_key: true

      t.timestamps
    end
  end
end
