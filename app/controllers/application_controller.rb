class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pundit
  protect_from_forgery with: :null_session

  def current_user
    current_api_user
  end
end
