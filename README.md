# Bit Fit

This is the submission for final project at Lighthouse Labs' Web Bootcamp
(September 16, 2019 cohort) for the following students:

* John Barratt
* Jake Fantin
* Fabio Papa

We came up with this project after rejecting many other ideas, because we feel
that it strikes a good balance between technical challenges and being able to
put to use many of the technologies we learned during the bootcamp.

## Stack

1. Ruby 2.6.5
1. Rails 6.0.1
1. React 16.8.6
1. Postgres
1. Heroku

## Dependencies

1. Ruby 2.6.5 (use [rbenv](https://github.com/rbenv/rbenv) or
   [rvm](https://rvm.io) to install)
1. After installing Ruby, install Bundler (`gem install bundler`)
1. [Yarn](https://yarnpkg.com/lang/en/docs/install)
1. [Postgres](https://www.postgresql.org)

## Installation

1. Clone the repo and change into its directory
1. Run `bundle install`
1. Run `yarn install --check-files`
1. Run `bundle exec rails db:create`
1. Run `bundle exec rails db:migrate`

## Running the app in development

1. Run `bin/rails server`
1. In a seperate terminal window, run `bin/webpack-dev-server`
1. visit [http://localhost:3000](http://localhost:3000)