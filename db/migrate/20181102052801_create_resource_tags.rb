class CreateResourceTags < ActiveRecord::Migration[5.1]
  def change
    create_table :resource_tags do |t|
      t.string :name

      t.timestamps
    end
  end
end
