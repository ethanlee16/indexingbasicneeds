class Api::ResourceSerializer < ActiveModel::Serializer
  attributes :id,
             :updated_at,
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
    unless scope[:current_user]
      return false
    end
    scope[:current_user].liked? object
  end
end
