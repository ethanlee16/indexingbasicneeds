# == Schema Information
#
# Table name: resource_tag_instances
#
#  id              :bigint(8)        not null, primary key
#  resource_id     :bigint(8)
#  resource_tag_id :bigint(8)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class ResourceTagInstanceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
