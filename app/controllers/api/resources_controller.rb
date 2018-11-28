class Api::ResourcesController < ApplicationController
    def index 
        render json: Resource.all, status: :ok
    end

    def show 
        @resource = Resource.find(params[:id])
        render json: @resource, status: :ok
    end 

    def create 
        @resource = Resource.create(resource_params)
        render json: @resource, status: :ok
    end 

    # Right now for simplicity we simply remove all tag instances and recreate them
    # Consider a tagging library for the future: https://github.com/mbleigh/acts-as-taggable-on/
    def update 
        @resource = Resource.find(params[:id])
        @resource.transaction do 
            @resource.resource_tag_instances.destroy_all
            @resource.update(resource_params)
        end
        render json: @resource, status: :ok 
    end

    private 

    def resource_params
        params.require(:resource).permit(
            :title, 
            :description, 
            :body, 
            { resource_tag_instances_attributes: [:resource_tag_id] }
        )
    end

end
