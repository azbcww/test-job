require 'rails_helper'

RSpec.describe "V1::Auth::Registrations", type: :request do
  describe "GET /v1/auth/registrations" do
    it "works! (now write some real specs)" do
      request_params = {
        email: "a@a.d",
        password: "password"
      }
      get "/v1/auth/hello_controller", headers: { 'Content-Type': 'application/json' }, params: request_params.to_json
      expect(response).to have_http_status(200)
    end
  end
end
