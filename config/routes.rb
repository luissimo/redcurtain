Rails.application.routes.draw do

  resources :quotes
  devise_for :users
  resources :relations
  resources :items
  resources :companies
  resources :invoices


  root 'invoices#index'


end
