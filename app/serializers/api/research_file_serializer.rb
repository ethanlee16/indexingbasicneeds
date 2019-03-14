# frozen_string_literal: true

class Api::ResearchFileSerializer < ActiveModel::Serializer
  attributes :id,
             :updated_at,
             :name,
             :category,
             :download_link

  def updated_at
    object.updated_at.strftime('%b %d, %Y')
  end

  def download_link
    Rails.application.routes.url_helpers.rails_blob_path(object.file, only_path: true)
  rescue Module::DelegationError => error
    '/'
  end
end
