require 'rails_helper'

RSpec.describe "Api::V1::User::ExpLogs", type: :request do
  describe "GET /api/v1/user/exp_logs" do
    let(:header) { {} }
    describe "成功時" do
      before do
        res = register_and_sign_in("a", "a@a.com", "password")
        header["client"] = res["client"]
        header["access-token"] = res["access-token"]
        header["uid"] = res["uid"]

        User.find_by(email: "a@a.com").exp_logs.create!(exp_points: 10, earned_at: Date.today, category: create(:category))
      end
      it "進捗が取得できること" do
        get "api/v1/users/exp_logs", headers: header
        expect(response).to have_http_status(200)
        binding.pry
        expect(response.body).to eq(User.find_by(email: "a@a.com").exp_logs.to_json)
      end
    end

    describe "ログインしていない場合" do
      it "401レスポンスが返ってくる" do
        get "api/v1/users/exp_logs", headers: header
        expect(response).to have_http_status(401)
      end
    end
  end
end
