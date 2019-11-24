Rails.application.routes.draw do
  root 'home#index'
  get '/authenticate', to: 'sessions#new'
  get 'sessions/create', to: 'sessions#create'
  get 'sessions/logout', to: 'sessions#logout'
end
