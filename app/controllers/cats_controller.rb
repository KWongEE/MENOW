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

  def edit
    @cat = Cat.find(params[:id])
  end
  
  def update
    @cat = Cat.find(params[:id])
    if @cat.update_attributes(cat_params)
      redirect_to '/', notice: "#{@cat.name} has been updated."
    else
      render "edit"
    end
  end

  def cat_params
    params.require(:cat).permit(:name,:description,:location,:image)
  end

end
