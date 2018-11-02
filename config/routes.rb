Rails.application.routes.draw do
  namespace :api do
    get 'resource_tags/index'
  end

  devise_for :users
  root to: "pages#root"

  get '/about', to: "pages#root"
  get '/resource/new', to: "pages#root"
  get '/resources/:id', to: "pages#root"
  get '/resources/:id/edit', to: "pages#root"

  namespace :api, defaults: { format: [:json, :csv] } do 
    resources :resources, only: [:index, :show, :create, :update]
    resources :resource_tags, only: [:index]
  end
end
