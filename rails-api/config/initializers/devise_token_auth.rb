# frozen_string_literal: true
DeviseTokenAuth.setup do |config|
  config.change_headers_on_each_request = false
  config.token_lifespan = 2.weeks
  config.batch_request_buffer_throttle = 5.seconds

  #TODO: バグったら直す
  # config.default_confirm_success_url = 'http://localhost:5000/sign_in'
end
