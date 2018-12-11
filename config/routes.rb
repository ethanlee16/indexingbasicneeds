Rails.application.routes.draw do
  namespace :api do
    get 'resource_tags/index'
  end
  
  # Override default users sessions controller
  # devise_for :users, controllers: {
  #   sessions: 'users/sessions'
  # }

  root to: "pages#root"

  get '/about', to: "pages#root"
  get '/resource/new', to: "pages#root"
  get '/resources/:id', to: "pages#root"
  get '/resources/:id/edit', to: "pages#root"

  namespace :api, defaults: { format: [:json, :csv] } do 
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :resources, only: [:index, :show, :create, :update]
    resources :resource_tags, only: [:index]
  end
end
