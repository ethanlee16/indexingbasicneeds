Rails.application.routes.draw do
  devise_for :users
  root to: "pages#root"

  get '/resource/new', to: "pages#root"
  get '/resources/:id', to: "pages#root"

  namespace :api, defaults: { format: [:json, :csv] } do 
    resources :resources, only: [:index, :show, :create]
  end
end
