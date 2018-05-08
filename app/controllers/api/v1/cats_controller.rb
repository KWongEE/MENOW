class Api::V1::CatsController < ApplicationController
  def index
      render json: Cat.all.reverse
  end
end
