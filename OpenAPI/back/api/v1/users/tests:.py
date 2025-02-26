tests:
  - name: "POST /api/v1/users/reading_logs"
    cases:
      - description: "成功時"
        request:
          method: POST
          path: "/api/v1/users/reading_logs"
          headers:
            Authorization: "Bearer valid_access_token"
          body:
            book_id: 1
            read_at: "2023-10-01"
            pages_read: 10
        response:
          status: 201
          body:
            id: 1
            user_id: 1
            book_id: 1
            read_at: "2023-10-01"
            pages_read: 10
            created_at: "2023-10-01T00:00:00Z"
            updated_at: "2023-10-01T00:00:00Z"

      - description: "ログインしていない場合"
        request:
          method: POST
          path: "/api/v1/users/reading_logs"
          headers:
            Authorization: ""
          body:
            book_id: 1
            read_at: "2023-10-01"
            pages_read: 10
        response:
          status: 401
          body:
            error: "Unauthorized"

      - description: "パラメーターが正しくないとき"
        request:
          method: POST
          path: "/api/v1/users/reading_logs"
          headers:
            Authorization: "Bearer valid_access_token"
          body:
            book_id: 1
            read_at: "2023-10-01"
            pages_read: -1
        response:
          status: 422
          body:
            error: "Unprocessable Entity"
