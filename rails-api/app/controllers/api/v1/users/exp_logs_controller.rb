module Api
  module V1
    module Users
      class ExpLogsController < ApplicationController
        before_action :authenticate_api_v1_user!

        def index
          logs = current_api_v1_user.exp_logs
          render json: logs
        end
      end
    end
  end
end
