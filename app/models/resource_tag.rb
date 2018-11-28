# == Schema Information
#
# Table name: resource_tags
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  category   :integer          default("other")
#

class ResourceTag < ApplicationRecord
    has_many :resource_tag_instances
    has_many :resources, through: :resource_tag_instances

    CATEGORIES = {
        other: 0, 
        student: 1, 
        campus: 2, 
        community: 3, 
    }

    enum category: CATEGORIES
end
