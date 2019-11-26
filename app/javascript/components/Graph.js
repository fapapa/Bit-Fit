import React from "react"
import { XYPlot, LineSeries, XAxis, YAxis, VerticalRectSeries } from 'react-vis';


export default function Graph(props) {
  const data = [
    {x: 1, x0: 0, y: 10, y0: 0},
    {x: 2, x0: 1, y: 5, y0: 0},
    {x: 4, x0: 2, y: 15, y0: 0}
  ];
return (
  <div className="App">
    <XYPlot height={300} width={300}>
      <VerticalRectSeries
        className={'graph-series'}
        data={data}
        fill={'red'}
        stroke={'white'}
      />
    </XYPlot>
  </div>
);
}
