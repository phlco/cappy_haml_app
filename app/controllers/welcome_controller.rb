class WelcomeController < ApplicationController
  respond_to do |format|
      format.html
      format.json {render :json}
    end
  def index
  end
  def haml
  end
  def quiz
  end
  def numbers
    amount = params[:numbers].to_i
    @nums = []
    amount.times do
      num = rand(90)
      @nums << num
    end
    render :json => {:numbers => @nums.join(", ")}
  end
end
