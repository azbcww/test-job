module Api
  module V1
    module Users
      class ReadingLogsController < ApplicationController
        before_action :set_user

        def create
          reading_log = @user.reading_logs.create(reading_log_params)

          if reading_log.persisted?
            render json: { message: 'Reading log saved', log: reading_log }, status: :created
          else
            render json: { error: 'Failed to save reading log' }, status: :unprocessable_entity
          end
        end

        def index
          logs = @user.reading_logs
          render json: logs
        end

        private

        def set_user
          @user = User.find(params[:user_id] || 1)
        end

        def reading_log_params
          params.permit(:book_id, :read_at, :pages_read)
        end        
      end
    end
  end
end