# == Schema Information
#
# Table name: resources
#
#  id                 :bigint(8)        not null, primary key
#  title              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  body               :text
#  description        :text
#  address            :hstore
#  contact_info       :text
#  cost               :decimal(8, 2)
#  link               :string
#  eligibility        :text
#  notes              :text
#  hours_of_operation :text
#  cost_description   :text
#  deadlines          :text
#  admin_note         :text
#

require 'test_helper'

class ResourceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
