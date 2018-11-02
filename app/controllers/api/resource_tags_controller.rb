class Api::ResourceTagsController < ApplicationController
    def index
        render json: ResourceTag.all, status: :ok
    end
end
