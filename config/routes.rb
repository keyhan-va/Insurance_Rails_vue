Rails.application.routes.draw do
  
  namespace :api,defaults: { format: :json } do
    namespace :v1 do
      resources :thirdparties

    end
  end
  root to: 'application#main_page'

end
