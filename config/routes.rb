CappyHamlApp::Application.routes.draw do
  root to: 'welcome#index'
  get '/haml', to: 'welcome#haml'
  get '/quiz', to: 'welcome#quiz'
  get '/rand/:id', to: 'welcome#rand'
end
