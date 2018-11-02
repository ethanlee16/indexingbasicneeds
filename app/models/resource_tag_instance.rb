class ResourceTagInstance < ApplicationRecord
  belongs_to :resource
  belongs_to :resource_tag
end
