class AddMoreDetailsToResource < ActiveRecord::Migration[5.1]
  def change
    add_column :resources, :phone, :string
    add_column :resources, :cost, :decimal, precision: 8, scale: 2
    add_column :resources, :link, :string
    add_column :resources, :eligibility, :text
    add_column :resources, :notes, :text
  end
end
