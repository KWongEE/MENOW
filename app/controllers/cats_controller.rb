class CatsController < ApplicationController
  def new
    @cat = Cat.new
  end

  def create
    @cat = Cat.new(cat_params)
    if current_user
      @cat.user = current_user
    else
      @cat.user_id = 1
    end
    if @cat.save
      redirect_to '/', notice: "#{@cat.name} has been uploaded."
    else
      render "new"
    end
  end

  def cat_params
    params.require(:cat).permit(:name,:description,:location,:image)
  end

end
