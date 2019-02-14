class AddDetailFieldsToResources < ActiveRecord::Migration[5.1]
  def change
    add_column :resources, :hours_of_operation, :text
    add_column :resources, :cost_description, :text 
    add_column :resources, :deadlines, :text 
    add_column :resources, :website_url, :string
    add_column :resources, :admin_note, :text 
    change_column :resources, :phone, :text 
    rename_column :resources, :phone, :contact_info
  end
end
