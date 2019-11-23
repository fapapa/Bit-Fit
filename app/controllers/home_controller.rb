class HomeController < ApplicationController
  def index
    if session[:user_id]
      @user = User.find(session[:user_id])
      if !@user.token.current?
        @user.token.update
      end
      # Get data and render
    else
      redirect_to authenticate_path
    end
  end
end
