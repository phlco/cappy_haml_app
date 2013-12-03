class WelcomeController < ApplicationController
  def index
  end
  def haml
  end
  def quiz
  end
  def array
    nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    array = params[:array].split(', ')

    real = array.map do |el|
      el.to_i
    end

    length = real.inject do
      |first, second| first + second
    end

    response = []
    length.times do
      response << nums.shuffle[0]
    end

    render json: response
  end
end
