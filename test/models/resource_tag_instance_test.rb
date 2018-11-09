# == Schema Information
#
# Table name: resource_tag_instances
#
#  id              :integer          not null, primary key
#  resource_id     :integer
#  resource_tag_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class ResourceTagInstanceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
