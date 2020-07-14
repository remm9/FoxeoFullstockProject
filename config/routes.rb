Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :videos 
      # resources :comments, only: [:index, :create]
  
    resources :comments #, only: [:index, :show, :update, :create, :destroy]
  end

end


