# == Schema Information
#
# Table name: resources
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Resource < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
end
