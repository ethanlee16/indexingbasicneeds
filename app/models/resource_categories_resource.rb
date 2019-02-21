# frozen_string_literal: true

# == Schema Information
#
# Table name: resource_categories_resources
#
#  id                   :bigint(8)        not null, primary key
#  resource_id          :bigint(8)        not null
#  resource_category_id :bigint(8)        not null
#


class ResourceCategoriesResource < ApplicationRecord
  belongs_to :resource
  belongs_to :resource_category

  # No combination of resource_id and resource_category_id should be duplicated
  validates :resource_category_id, uniqueness: { scope: :resource_id }
end
