Rails.application.routes.draw do

  resources :quotes
  resources :relations
  resources :items
  resources :companies
  resources :invoices
  resources :subscribers
  devise_for :users, controllers: { registration: 'registrations'}

  root 'invoices#index'


end
