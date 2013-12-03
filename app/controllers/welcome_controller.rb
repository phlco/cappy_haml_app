class WelcomeController < ApplicationController
  def index
  end

  def haml
  end

  def quiz
  end

  def more
  end

  def numbers
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    number_of_numbers = params[:numberOfNumbers].to_i
    random_sample = numbers.sample(number_of_numbers)
    #binding.pry
    render :json => random_sample
  end

end
