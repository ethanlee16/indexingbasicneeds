class Api::ResourcesController < ApplicationController
  before_action :parse_tag_ids, only: [:index]
  before_action :authenticate_api_user!

  has_scope :by_tags, type: :array
  has_scope :ordered
  has_scope :with_query

  def index
    resources = apply_scopes(Resource).all.uniq
    render json: resources, status: :ok, scope: {
      current_user: current_api_user,
    }
  end

  def show
    resource = Resource.find(params[:id])
    render json: resource, status: :ok, scope: {
      current_user: current_api_user,
    }
  end

  def create
    resource = Resource.create(resource_params)
    render json: resource, status: :ok
  end

  # Right now for simplicity we simply remove all tag instances and recreate them
  # Consider a tagging library for the future: https://github.com/mbleigh/acts-as-taggable-on/
  def update
    resource = Resource.find(params[:id])
    resource.transaction do
      resource.resource_tag_instances.destroy_all
      resource.update(resource_params)
    end
    render json: resource, status: :ok
  end

  def upvote
    resource = Resource.find(params[:id])
    resource.liked_by current_api_user
    render json: nil, status: :ok
  end

  def unupvote
    resource = Resource.find(params[:id])
    if current_api_user.liked? resource
      resource.unliked_by current_api_user
    end
    render json: nil, status: :ok
  end

  private

  def resource_params
    params.require(:resource).permit(
      :title,
      :description,
      :body,
      {resource_tag_instances_attributes: [:resource_tag_id]}
    )
  end

  # Before applying scopes need to parse URL params into array
  def parse_tag_ids
    if params.has_key?(:by_tags)
      params[:by_tags] = JSON.parse(params[:by_tags])
    end
  end
end
