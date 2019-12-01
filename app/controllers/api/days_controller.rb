class Api::DaysController < ApplicationController
  def show
    period = params[:period]
    render json: <<-EOS
[
      { "x": 1, "x0": 0, "y": 20, "y0": 0, "label": "#{period}1" },
      { "x": 2, "x0": 1, "y": 5, "y0": 0, "label": "#{period}2" },
      { "x": 3, "x0": 2, "y": 15, "y0": 0, "label": "#{period}3" },
      { "x": 4, "x0": 3, "y": 10, "y0": 0, "label": "#{period}4" }
]
EOS
  end
end
