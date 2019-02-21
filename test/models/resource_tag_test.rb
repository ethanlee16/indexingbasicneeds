# == Schema Information
#
# Table name: resource_tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  category   :integer          default("other")
#

require 'test_helper'

class ResourceTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
