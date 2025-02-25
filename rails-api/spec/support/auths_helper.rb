module AuthsHelper
  def register_and_sign_in(name, email, password)
    request_params = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password,
      }
    post "api/v1/auth", headers: { 'Content-Type': 'application/json' }, params: request_params.to_json

    post "api/v1/auth/sign_in/",
      params: { email: email, password: password },
      as: :json

    response.headers.slice('client', 'access-token', 'uid')
  end

  def sign_in(user)
    post "api/v1/auth/sign_in/",
      params: { email: user[:email], password: user[:password] },
      as: :json

    response.headers.slice('client', 'access-token', 'uid')
  end
end
