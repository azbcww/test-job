require 'rails_helper'
require 'json'

RSpec.describe "API::V1::Books", type: :request do
  describe "POST api/v1/users/books" do
    subject { post "api/v1/users/books", headers: headers, params: params }
    let(:headers) { {} }
    let(:params) { {} }

    describe "成功時" do
      before do
        res = register_and_sign_in("a", "a@a.com", "password")
        headers["client"] = res["client"]
        headers["access-token"] = res["access-token"]
        headers["uid"] = res["uid"]

        create(:book)
        params["isbn"] = Book.first.isbn
      end

      it "登録が成功すること" do
        subject
        expect(User.first.user_books.count).to eq 1
        expect(response).to have_http_status(:created)
      end
    end

    describe "失敗時" do
      describe "認証できないとき" do
        before do
          register_and_sign_in("a", "a@a.com", "password")
          create(:book)
          params["book_id"] = Book.first.id
        end

        it "登録が失敗し、正しいhttp status が返ってくる" do
          subject
          expect(User.first.user_books.count).to eq 0
          expect(response).to have_http_status(401)
        end
      end

      describe "パラメータが不正なとき" do
        before do
          res = register_and_sign_in("a", "a@a.com", "password")
          headers["client"] = res["client"]
          headers["access-token"] = res["access-token"]
          headers["uid"] = res["uid"]

          create(:book)

          params["book_id"] = 2
        end

        it "登録が失敗し、正しいhttp status が返ってくる" do
          subject
          expect(User.first.user_books.count).to eq 0
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end
  end
  describe "GET api/v1/users/books" do
    subject { get "api/v1/users/books", headers: headers }
    let(:headers) { {} }

    describe "認証できないとき" do
      before do
        register_and_sign_in("a", "a@a.com", "password")
      end

      it "登録が失敗し、正しいhttp status が返ってくる" do
        subject
        expect(User.first.user_books.count).to eq 0
        expect(response).to have_http_status(401)
      end
    end

    describe "成功時" do
      before do
        res = register_and_sign_in("a", "a@a.com", "password")
        headers["client"] = res["client"]
        headers["access-token"] = res["access-token"]
        headers["uid"] = res["uid"]

        create(:book)
        post "api/v1/users/books", headers: headers, params: {:isbn => Book.first.isbn}
      end

      it "returns a list of books" do
        subject
        expect(response).to have_http_status(:ok)
        expect(response.body).to eq(User.first.books.to_json)
      end
    end
  end
end
