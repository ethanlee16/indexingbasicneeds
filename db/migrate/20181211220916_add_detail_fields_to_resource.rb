class AddDetailFieldsToResource < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'hstore'
    add_column :resources, :address, :hstore
  end
end
