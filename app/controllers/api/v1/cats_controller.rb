class Api::V1::CatsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Cat.all
  end

  def show
    render json: Cat.find(params[:id])
  end

  # def create
  #   cat = Cat.new(cat_params)
  #   if current_user
  #     cat.user = current_user
  #   else
  #     cat.user_id = 1
  #   end
  #
  #   if cat.save
  #     render json: Cat.all
  #   else
  #     render json: {message: "Did not save."}
  #   end
  # end
  #
  # def cat_params
  #   params.require(:cats).permit(:name,:description,:location,:image)
  # end


end
