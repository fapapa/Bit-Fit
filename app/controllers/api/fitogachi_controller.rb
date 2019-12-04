class Api::FitogachiController < Api::ApiController
  def show
    render json: current_user.fitogachi
  end

  def update
    fitogachi = current_user.fitogachi
    fitogachi.last_experience = fitogachi.current_exp
    fitogachi.save
    head :ok, content_type: "application/json"
  end

  def color
    fitogachi = current_user.fitogachi
    fitogachi.color = params[:color]
    fitogachi.save
    head :ok
  end
end
