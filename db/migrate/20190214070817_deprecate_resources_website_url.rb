class DeprecateResourcesWebsiteUrl < ActiveRecord::Migration[5.1]
  def change
    remove_column(:resources, :website_url)
  end
end
