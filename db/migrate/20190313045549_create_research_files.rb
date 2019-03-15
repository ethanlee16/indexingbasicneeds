class CreateResearchFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :research_files do |t|
      t.string :name
      t.integer :category, default: 0

      t.timestamps
    end
  end
end
