class WelcomeController < ApplicationController
  def index
  end
  def random
    # binding.pry
    @number_array = []
    amount = params[:amount].to_i
    while @number_array.length < amount do
      @number_array << Random.rand(0..100)
    end
    render :json => @number_array
  end
end
