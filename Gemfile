# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'https://rubygems.org'

gem "middleman", "~>3.1.3"
gem "slim"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

# For faster file watcher updates:
# gem "wdm", "~> 0.1.0") # Windows

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end

gem 'capistrano'
gem 'capistrano-bundler'
gem 'capistrano-rbenv', github: "capistrano/rbenv"