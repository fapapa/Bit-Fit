class Api::FriendsController < Api::ApiController

  def index
    render json: current_user.get_friends
  end

  def search
    render json: current_user.get_friends_by_name(params[:name])
  end
end