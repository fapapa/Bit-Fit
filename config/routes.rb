Rails.application.routes.draw do
  root 'home#index'
  get '/authenticate', to: 'sessions#new'
  get 'sessions/create', to: 'sessions#create'
  get 'sessions/logout', to: 'sessions#logout'

  get 'sessions/test', to: 'test#show'

  namespace :api do
    get 'calories', to: 'calories#index'
    get 'calories/:period', to: 'calories#period'

    get 'steps', to: 'steps#index'
    get 'steps/:period', to: 'steps#period'
  end
end
