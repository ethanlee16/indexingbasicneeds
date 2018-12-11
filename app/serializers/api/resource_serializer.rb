class Api::ResourceSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :description,
             :body,
             :num_likes,
             :liked_by_user

  has_many :resource_tags

  def num_likes
    object.get_likes.size
  end

  def liked_by_user
    scope[:current_user].liked? object
  end
end
