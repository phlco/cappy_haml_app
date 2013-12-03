CappyHamlApp::Application.routes.draw do
  root to: 'welcome#index'
  get '/haml', to: 'welcome#haml'
  get '/quiz', to: 'welcome#quiz'
end
