# frozen_string_literal: true

class Api::ResourceCategoriesController < Api::ApiController
  def index
    render json: ResourceCategory.all, status: :ok
  end
end
