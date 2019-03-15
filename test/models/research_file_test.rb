# == Schema Information
#
# Table name: research_files
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  category   :integer          default("campus")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ResearchFileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
