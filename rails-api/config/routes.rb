Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'hello', to: 'hello#index'

      # 書籍関連
      resources :books, only: [:index, :create]

      # ユーザーに紐づくリソース
      resources :users, only: [] do
        resources :books, only: [:index, :create], module: :users
        resources :reading_logs, only: [:index, :create], module: :users
        resources :exp_logs, only: [:index], module: :users
        resource :progress, only: [:show], module: :users
      end

      # Devise Token Auth (ユーザー認証)
      mount_devise_token_auth_for "User", at: "auth"
    end
  end

  # ヘルスチェック用
  get "up" => "rails/health#show", as: :rails_health_check
end
