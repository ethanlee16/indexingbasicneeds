class Api::ResourceSerializer < ActiveModel::Serializer
  attributes :id,
             :updated_at,
             :title,
             :description,
             :body,
             :num_likes,
             :liked_by_user,
             :address,
             :phone,
             :cost,
             :link,
             :eligibility,
             :notes

  has_many :resource_categories
  has_many :resource_tags

  def updated_at
    object.updated_at.strftime("%F, %H:%M")
  end

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
