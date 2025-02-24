module Api
  module V1
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      # skip_before_action :authenticate_api_v1_user!
      # after_action :set_token_info, only: [:create]

      # private

      # def sign_up_params
      #   params.permit(:email, :password, :password_confirmation, :name)
      # end

      # def set_token_info
      #   return unless @resource.persisted?

      #   token = @resource.create_new_auth_token
      #   response.set_header('access-token', token['access-token'])
      #   response.set_header('client', token['client'])
      # end
    end
  end
end
