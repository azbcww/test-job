module Api
  module V1
    module Users
      class ProgressController < ApplicationController
        before_action :set_user

        def show
          total_pages_read = @user.reading_logs.sum(:pages_read)
          total_exp = @user.exp_logs.sum(:exp_points)

          render json: {
            user_id: @user.id,
            total_pages_read: total_pages_read,
            total_exp: total_exp
          }
        end

        private

        def set_user
          @user = User.find(params[:user_id] || 1)
        end
      end
    end
  end
end