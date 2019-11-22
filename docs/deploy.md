# Deploying the App

This app is deployed to
[https://bit-fit.herokuapp.com](https://bit-fit.herokuapp.com).

## Setup

You need to do a one-time set up of your development machine to deploy. [Install
the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
and run the following commands in your terminal:

```bash
$ heroku login
$ heroku git:remote -a bit-fit
$ git remote get-url heroku
```

The last command is just to verify that Heroku is set up properly. The output
should be `https://git.heroku.com/bit-fit.git`.

## Deploy your changes

To deploy your changes, first make sure that the master branch has your changes,
and then `git push heroku master`.
