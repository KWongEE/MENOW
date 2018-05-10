class Api::V1::CatsController < ApplicationController
  def index
    render json: Cat.all.reverse
  end

  def show
    render json: Cat.find(params[:id])
  end

end
