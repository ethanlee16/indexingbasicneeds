class Api::ResourceTagsController < Api::ApiController
    def index
        render json: ResourceTag.all, status: :ok
    end
end
