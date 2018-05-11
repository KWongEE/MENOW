Rails.application.routes.draw do
  devise_for :users
  resources :cats, only: [:new, :create]

  namespace :api do
    namespace :v1 do
      resources :cats
    end
  end
  root 'static_pages#index'
  get "*path", to: "static_pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
