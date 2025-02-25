require 'rails_helper'

RSpec.describe "Api::V1::Books", type: :request do
  describe "GET /api/v1/books" do
    before { create_list(:book, 2) }
    it "本の一覧が取得できること" do
      get "api/v1/books"
      expect(response.body).to eq(Book.all.to_json)
    end
  end
end
