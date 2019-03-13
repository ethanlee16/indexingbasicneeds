# frozen_string_literal: true

class DirectUploadsController < ActiveStorage::DirectUploadsController
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  before_action :authenticate_api_user!
end
