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

require 'test_helper'

class ResourceCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
