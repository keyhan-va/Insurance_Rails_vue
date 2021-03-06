Rails.application.routes.draw do
  devise_for :users

  namespace :api,defaults: { format: :json } do
    namespace :v1 do
      resources :thirdparties

      resources :registrations
      devise_scope :user do
        post "sign_up", to: "registrations#create"
        post "sign_in", to: "sessions#create"
      end
    end
  end
  root to: 'application#main_page'

end
