class Api::ResourceSerializer < ActiveModel::Serializer
  attributes :id, 
             :title, 
             :description, 
             :body

  has_many :resource_tags
end
