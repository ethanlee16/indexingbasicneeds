# frozen_string_literal: true

class ResourceCategoriesResource < ApplicationRecord
  belongs_to :resource
  belongs_to :resource_category

  # No combination of resource_id and resource_category_id should be duplicated
  validates :resource_category_id, uniqueness: { scope: :resource_id }
end
