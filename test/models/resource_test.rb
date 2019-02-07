# == Schema Information
#
# Table name: resources
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  body        :text
#  description :text
#  address     :hstore
#  phone       :string
#  cost        :decimal(8, 2)
#  link        :string
#  eligibility :text
#  notes       :text
#

require 'test_helper'

class ResourceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
