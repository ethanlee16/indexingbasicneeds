Rails.application.routes.draw do
  devise_for :users
  root to: "pages#root"

  get '/resources/create', to: "pages#root"
  
  namespace :api, defaults: { format: [:json, :csv] } do 
    resources :resources, only: [:index]
  end
end
