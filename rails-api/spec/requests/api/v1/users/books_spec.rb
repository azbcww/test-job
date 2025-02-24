require 'rails_helper'

RSpec.describe "API::V1::Books", type: :request do
  describe "POST api/v1/users/books" do
    subject { post "api/v1/users/books", headers: headers, params: params }
    describe "成功時" do
      let(:headers) { {} }
      let(:params) { {} }

      before do
        res = register_and_sign_in("a@a.com", "password")
        headers["client"] = res["client"]
        headers["access-token"] = res["access-token"]
        headers["uid"] = res["uid"]

        create(:book)

        params["book_id"] = Book.first.id
      end

      it "登録が成功すること" do
        subject
        expect(User.first.user_books.count).to eq 1
        expect(response).to have_http_status(created)
      end
    end
  end
  describe "GET api/v1/users/books" do
    subject { get "api/v1/users/books", headers: headers }

    describe "成功時" do
      let(:headers) { {} }

      before do
        res = register_and_sign_in("a@a.com", "password")
        headers["client"] = res["client"]
        headers["access-token"] = res["access-token"]
        headers["uid"] = res["uid"]
      end

      it "returns a list of books" do
        subject
      end
    end
  end
end
