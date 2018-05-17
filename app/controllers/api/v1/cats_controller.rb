class Api::V1::CatsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Cat.all
  end

  def show
    render json: Cat.find(params[:id])
  end
end
