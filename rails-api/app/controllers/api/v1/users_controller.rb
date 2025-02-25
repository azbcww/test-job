module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_api_v1_user!
      
      def show
        render json: current_api_v1_user
      end
    end
  end
end
