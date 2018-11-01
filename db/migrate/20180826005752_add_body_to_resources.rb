class AddBodyToResources < ActiveRecord::Migration[5.1]
  def change
    add_column :resources, :body, :text
  end
end
