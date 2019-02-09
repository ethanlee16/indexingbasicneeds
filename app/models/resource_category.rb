# frozen_string_literal: true

# == Schema Information
#
# Table name: resource_categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class ResourceCategory < ApplicationRecord
  has_and_belongs_to_many :resources
end
