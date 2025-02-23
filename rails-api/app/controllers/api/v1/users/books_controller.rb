module Api
  module V1
    module Users
      class BooksController < ApplicationController
        before_action :set_user

        def create
          book = Book.find(params[:book_id])
          user_book = @user.user_books.create(book: book)

          if user_book.persisted?
            render json: { message: 'Book registered successfully', book: book }, status: :created
          else
            render json: { error: 'Failed to register book' }, status: :unprocessable_entity
          end
        end

        def index
          books = @user.books
          render json: books
        end

        private

        def set_user
          @user = User.find(params[:user_id] || 1) # 仮のユーザーID
        end
      end
    end
  end
end
