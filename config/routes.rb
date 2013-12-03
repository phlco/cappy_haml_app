CappyHamlApp::Application.routes.draw do
  root to: 'welcome#index'
  get '/home', to: 'welcome#home'
  get '/quiz', to: 'welcome#quiz'
end
