# frozen_string_literal: true

class Api::ResearchFilesController < ApplicationController
  before_action :authenticate_api_user!, except: %i[index]

  def index
    research_files = ResearchFile.all
    render json: research_files, status: :ok
  end

  def create
    research_file = ResearchFile.create!(research_file_params)
    authorize research_file
    render json: research_file, status: :ok
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
