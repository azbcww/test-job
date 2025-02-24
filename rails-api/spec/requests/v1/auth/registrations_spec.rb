require 'rails_helper'

RSpec.describe "V1::Auth::Registrations", type: :request do
  describe "POST api/v1/auth" do
    subject {  post "api/v1/auth", headers: { 'Content-Type': 'application/json' }, params: request_params.to_json}
    
    describe "成功時" do
      let(:request_params) { 
        { 
          email: "a@a.com", 
          password: "password", 
          password_confirmation: "password" 
        } 
      }

      it "ユーザー登録ができる" do
      expect { subject }.to change { User.count }.by(1)
      end

      it "200レスポンスが返ってくる" do
      subject
      expect(response).to have_http_status(200)
      end
    end

    describe "失敗時" do
      context "request params が無効な場合" do
        let(:request_params) { { email: nil, password: "password", password_confirmation: "password" } }

        it "ユーザー登録ができない" do
          expect { subject }.not_to change { User.count }
        end

        it "422レスポンスが返ってくる" do
          subject
          expect(response).to have_http_status(422)
        end
      end
    end
  end

  describe "POST /v1/auth/sign_in" do
    subject {post "api/v1/auth/sign_in", headers: { 'Content-Type': 'application/json' }, params: sign_in_params.to_json}
    
    before do
      request_params = {
        email: "a@a.com",
        password: "password",
        password_confirmation: "password",
      }
      post "api/v1/auth", headers: { 'Content-Type': 'application/json' }, params: request_params.to_json
    end

    describe "成功時" do
      let(:sign_in_params) {
        {
          email: "a@a.com",
          password: "password"
        }
      }
      it "signs in the user" do
        subject
        expect(response).to have_http_status(200)
        expect(response.headers).to include('access-token', 'client', 'uid')
      end
    end
    
    describe "失敗時" do
      let(:sign_in_params) {
      {
        email: "a@a.com",
        password: "wrongpassword"
      }
      }
      it "does not sign in the user" do
        subject
        expect(response).to have_http_status(401)
        expect(response.headers).not_to include('access-token', 'client', 'uid')
      end
    end
  end

  describe "DELETE /v1/auth/sign_out" do
    subject {delete "api/v1/auth/sign_out", headers: sign_out_header}

    describe "成功時" do
      let(:sign_out_header) {
        {
        }
      }
      it "signs out the user" do
        res = register_and_sign_in("a@a.com", "password")
        sign_out_header["client"] = res["client"]
        sign_out_header["access-token"] = res["access-token"]
        sign_out_header["uid"] = res["uid"]

        subject
        expect(response).to have_http_status(200)
      end
    end

    describe "ヘッダが正しくないとき" do
      let(:sign_out_header) {
        {
        }
      }
      it "signs out the user" do
        register_and_sign_in("a@a.com", "password")

        subject
        expect(response).to have_http_status(404)
      end
    end
  end
end
