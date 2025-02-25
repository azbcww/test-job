class Api::V1::HelloController < ApplicationController
  before_action :authenticate_api_v1_user!

  def index
    render json: { message: "Hello from Rails!" }
  end
end
