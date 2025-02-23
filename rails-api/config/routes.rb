Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'hello', to: 'hello#index'

      get 'books', to: 'books#index'
      
      namespace :users do
        post 'books', to: 'books#create'
        get 'books', to: 'books#index'
        
        post 'reading_logs', to: 'reading_logs#create'
        get 'reading_logs', to: 'reading_logs#index'
        
        get 'exp_logs', to: 'exp_logs#index'
        
        get 'progress', to: 'progress#show'
      end
    end
  end
  
  namespace :v1 do
    mount_devise_token_auth_for "User", at: "auth"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
