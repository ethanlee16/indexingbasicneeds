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

    private 

    def resource_params
        params.require(:resource).permit(:title, :body)
    end
end
