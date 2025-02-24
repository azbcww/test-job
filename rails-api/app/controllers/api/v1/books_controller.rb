module Api
  module V1
    class BooksController < ApplicationController
      def index
        books = Book.all
        render json: books
      end

      def create
        book = Book.new(book_params)

        if book.save
          render json: book, status: :created
        else
          render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      # Strong Parameters を使って、許可されたパラメータのみを受け付ける
      def book_params
        params.require(:book).permit(:title, :author, :total_pages, :isbn, :image)
      end
    end
  end
end
