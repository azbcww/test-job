Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      
      get 'hello', to: 'hello#index'
      get 'books', to: 'books#index'
      get 'current_user', to: 'users#show'

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

  get "up" => "rails/health#show", as: :rails_health_check
end
