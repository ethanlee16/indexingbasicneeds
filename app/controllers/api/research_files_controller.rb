# frozen_string_literal: true

class Api::ResearchFilesController < ApplicationController
  before_action :authenticate_api_user!

  def index
    files = ResearchFiles.all
    render json: files, status: :ok
  end

  def create
    file = ResearchFile.create(research_file_params)
    authorize file
    render json: file, status: :ok
  end

  private

  def research_file_params
    params.require(:research_file).permit(
      :name,
      :category,
      :file
    )
  end
end
