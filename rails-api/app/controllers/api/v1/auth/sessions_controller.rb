module Api
  module V1
    module Auth
      class SessionsController < DeviseTokenAuth::SessionsController
        skip_before_action :authenticate_api_v1_user!

        protected

        def render_create_success
          render json: {
            data: @resource.as_json(except: [:tokens, :created_at, :updated_at]),
            status: 'success'
          }
        end
      end
    end
  end
end
