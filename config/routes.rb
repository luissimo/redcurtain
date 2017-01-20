Rails.application.routes.draw do

  devise_for :users
  resources :relations
  resources :items
  resources :companies
  resources :invoices


  root 'invoices#index'


end
