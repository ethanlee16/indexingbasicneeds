class Api::ResourcesController < ApplicationController
    def index 
        return Resource.all
    end
end
