require 'rails_helper'

RSpec.describe "V1::Auth::Registrations", type: :request do
  describe "GET /v1/auth/registrations" do
    it "works! (now write some real specs)" do
      request_params = {
        email: "a@a.com",
        password: "password",
        password_confirmation: "password",
      }
      post "/v1/auth", headers: { 'Content-Type': 'application/json' }, params: request_params.to_json

      expect(response).to have_http_status(200)
    end
  end

  describe "POST /v1/auth/sign_in" do
    before do
      request_params = {
        email: "a@a.com",
        password: "password",
        password_confirmation: "password",
      }
      post "/v1/auth", headers: { 'Content-Type': 'application/json' }, params: request_params.to_json
    end

    it "signs in the user" do
      sign_in_params = {
        email: "a@a.com",
        password: "password"
      }
      post "/v1/auth/sign_in", headers: { 'Content-Type': 'application/json' }, params: sign_in_params.to_json

      expect(response).to have_http_status(200)
      expect(response.headers).to include('access-token', 'client', 'uid')
    end
  end
end
