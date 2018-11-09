# == Schema Information
#
# Table name: resources
#
#  id          :integer          not null, primary key
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  body        :text
#  description :text
#

class Resource < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true

    has_many :resource_tag_instances
    has_many :resource_tags, through: :resource_tag_instances

    accepts_nested_attributes_for :resource_tag_instances
end
