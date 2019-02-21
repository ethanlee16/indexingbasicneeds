# frozen_string_literal: true

class Api::ResourceCategoriesController < ApplicationController
  def index
    render json: ResourceCategory.all, status: :ok
  end
end
