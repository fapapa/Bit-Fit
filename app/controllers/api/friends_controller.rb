class Api::FriendsController < Api::ApiController

  def index
    render json: current_user.get_friends, include: [:fitogachi]
  end

  def search
    render json: current_user.search_friends(params[:name])
  end
end
