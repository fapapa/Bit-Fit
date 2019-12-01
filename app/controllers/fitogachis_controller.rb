class FitogachisController < ApplicationController
  before_action :require_authentication

  def new
    @fitogachi = current_user.build_fitogachi
  end

  def create
    @fitogachi = current_user.build_fitogachi(name: params[:fitogachi][:name])

    if @fitogachi.save
      redirect_to root_path
    else
      render :new, notice: "Something went wrong"
    end
  end

  private

  def require_authentication
    redirect_to root_path unless current_user
  end

  def current_user
    return false unless session[:user_id]

    @user ||= User.find(session[:user_id])
  end
end
