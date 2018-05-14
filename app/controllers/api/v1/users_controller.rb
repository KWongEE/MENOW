class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

end
