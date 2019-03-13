# frozen_string_literal: true

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

class ResearchFile < ApplicationRecord
  CATEGORIES = {
    campus: 0,
    statewide: 1,
    national: 2
  }.freeze

  enum category: CATEGORIES
end
