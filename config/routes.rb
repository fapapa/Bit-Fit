Rails.application.routes.draw do
  root 'home#index'

  get '/authenticate', to: 'sessions#new'
  get 'sessions/create', to: 'sessions#create'
  get 'sessions/logout', to: 'sessions#logout'
  get 'sessions/goodbye', to: 'sessions#goodbye'

  resource :fitogachi, only: [:new, :create]

  get 'sessions/test', to: 'test#show'

  namespace :api do
    get 'calories', to: 'calories#index'
    get 'calories/:period', to: 'calories#period'

    get 'steps', to: 'steps#index'
    get 'steps/:period', to: 'steps#period'

    get 'heartrate', to: 'heartrate#index'
    get 'heartrate/:period', to: 'heartrate#period'

    get 'experience', to: 'experience#index'

    get 'profile', to: 'profile#index'

    get 'fitogachi', to: 'fitogachi#show'
    put 'fitogachi', to: 'fitogachi#update'
    get 'friends', to: 'friends#index'
    get 'friends/search', to: 'friends#search'

    get 'battle', to: 'battles#battle_data'
    post 'battles', to: 'battles#create_battle'
    get 'battles/notifications', to: 'battles#notifications'
    get 'battles', to: 'battles#index'
    post 'battles/:id', to: 'battles#update'
    get 'fitness/:period', to: 'days#show'

  end
  get 'sessions/test', to: 'test#show'
end
