class WelcomeController < ApplicationController
  def index
  end
  def haml
  end
  def quiz
  end

  def random
    array = []
    params[:number].to_i.times do
      array << rand(10)
    end
    render :text => array.to_s
  end
end
