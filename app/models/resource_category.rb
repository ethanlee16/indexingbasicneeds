# frozen_string_literal: true
# == Schema Information
#
# Table name: resource_categories
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class ResourceCategory < ApplicationRecord
  has_many :resource_categories_resources
  has_many :resources, through: :resource_categories_resources
end
