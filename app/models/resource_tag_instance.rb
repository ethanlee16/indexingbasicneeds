# == Schema Information
#
# Table name: resource_tag_instances
#
#  id              :bigint(8)        not null, primary key
#  resource_id     :bigint(8)
#  resource_tag_id :bigint(8)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class ResourceTagInstance < ApplicationRecord
  belongs_to :resource
  belongs_to :resource_tag

  # No combination of resource_id and resource_tag_id should be duplicated
  validates :resource_tag_id, uniqueness: { scope: :resource_id }
end
