Rails.application.routes.draw do

  resources :invoices
  root 'invoices#index'




end
