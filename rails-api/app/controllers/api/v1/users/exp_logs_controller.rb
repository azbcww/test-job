module Api
  module V1
    module Users
      class ExpLogsController < ApplicationController
        before_action :set_user

        def index
          logs = @user.exp_logs
          render json: logs
        end

        private

        def set_user
          @user = User.find(params[:user_id] || 1)
        end
      end
    end
  end
end
