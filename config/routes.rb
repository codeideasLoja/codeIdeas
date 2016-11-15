Rails.application.routes.draw do

  get 'contacto', to: 'messages#new', as: 'contacto'
  post 'contacto', to: 'messages#create'

  mount_push_type



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
