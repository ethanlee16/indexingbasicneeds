# frozen_string_literal: true

class Api::ResourcesController < ApplicationController
  before_action :parse_tag_ids, only: [:index]
  before_action :authenticate_api_user!, except: %i[index show]

  has_scope :by_tags, type: :array
  has_scope :by_category
  has_scope :ordered
  has_scope :with_query

  def index
    resources = apply_scopes(Resource).all.uniq
    render json: resources, status: :ok, scope: {
      current_user: current_api_user
    }
  end

  def show
    resource = Resource.find(params[:id])
    render json: resource, status: :ok, scope: {
      current_user: current_api_user
    }
  end

  def create
    resource = Resource.create(resource_params)
    authorize resource
    render json: resource, status: :ok, scope: {
      current_user: current_api_user
    }
  end

  # Right now for simplicity we simply remove all tag instances and recreate them
  # Consider a tagging library for the future: https://github.com/mbleigh/acts-as-taggable-on/
  def update
    resource = Resource.find(params[:id])
    authorize resource

    resource.transaction do
      resource.resource_tag_instances.destroy_all
      resource.resource_categories_resources.destroy_all
      resource.update(resource_params)
    end

    render json: resource, status: :ok, scope: {
      current_user: current_api_user
    }
  end

  def upvote
    resource = Resource.find(params[:id])
    resource.liked_by current_api_user
    render json: nil, status: :ok
  end

  def unupvote
    resource = Resource.find(params[:id])
    resource.unliked_by current_api_user if current_api_user.liked? resource
    render json: nil, status: :ok
  end

  private

  def resource_params
    params.require(:resource).permit(
      :title,
      :description,
      :body,
      :contact_info, 
      :cost, 
      :cost_description, 
      :website_url, 
      :eligibility, 
      :hours_of_operation, 
      :deadlines, 
      :admin_note, 
      { address: [:street_address, :city, :state, :zip] },  
      { resource_tag_instances_attributes: [:resource_tag_id] },
      { resource_categories_resources_attributes: [:resource_category_id] }
    )
  end

  # Before applying scopes need to parse URL params into array
  def parse_tag_ids
    params[:by_tags] = JSON.parse(params[:by_tags]) if params.key?(:by_tags)
  end
end
