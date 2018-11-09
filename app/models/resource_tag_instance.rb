# == Schema Information
#
# Table name: resource_tag_instances
#
#  id              :integer          not null, primary key
#  resource_id     :integer
#  resource_tag_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class ResourceTagInstance < ApplicationRecord
  belongs_to :resource
  belongs_to :resource_tag
end
