class WelcomeController < ApplicationController
  def index
  end

  def haml
  end

  def quiz
  end

  def rand
    numRand = params[:id].to_i

    randNums = numRand.times.map { Random.rand(11) }

    randNums.join(', ')

    render json: { data: randNums }
  end
end
