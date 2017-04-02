Rails.application.routes.draw do

  root 'invoices#index'

  resources :quotes
  resources :relations
  resources :items
  resources :companies
  resources :invoices
  resources :subscribers
  devise_for :users, controllers: { registration: 'registrations'}

  get   '/kies-bestaande-sjabloon'   =>  'invoices#select_company'
  get   '/kies-bestaande-relatie'    =>  'invoices#select_relation'

end
