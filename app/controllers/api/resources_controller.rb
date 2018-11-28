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

    def update 
        @resource = Resource.find(params[:id])
        @resource.update(resource_params)
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
