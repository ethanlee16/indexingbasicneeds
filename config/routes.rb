# frozen_string_literal: true

Rails.application.routes.draw do
  # Override default users sessions controller
  # devise_for :users, controllers: {
  #   sessions: 'users/sessions'
  # }

  root to: 'pages#root'

  get '/about', to: 'pages#root'
  get '/get_involved', to: 'pages#root'
  get '/calendar', to: 'pages#root'
  get '/guides', to: 'pages#root'
  get '/learn', to: 'pages#root'

  get '/resource/new', to: 'pages#root'
  get '/resources/:id', to: 'pages#root'
  get '/resources/:id/edit', to: 'pages#root'
  get '/resources', to: 'pages#root'

  post '/rails/active_storage/direct_uploads', to: 'api/direct_uploads#create'

  namespace :api, defaults: { format: %i[json csv] } do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :resources, only: %i[index show create update] do
      member do
        post 'upvote'
        post 'unupvote'
      end
    end
    resources :resource_tags, only: [:index]
    resources :resource_categories, only: [:index]
    resources :research_files, only: %i[index create]
  end
end
