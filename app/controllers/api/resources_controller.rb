class Api::ResourcesController < ApplicationController
    def index 
        render json: Resource.all
    end
end
