FROM mcr.microsoft.com/devcontainers/ruby

RUN apt update && \
  apt-get install --no-install-recommends -y \
  build-essential \
  default-libmysqlclient-dev \
  mariadb-client \
  libvips \
  pkg-config \
  git

RUN su vscode -c "gem install rails"
RUN su vscode -c "/usr/local/rvm/bin/rvm fix-permissions"

WORKDIR "/workspace/rails-api"
RUN bundle config set --local path vendor/bundle
