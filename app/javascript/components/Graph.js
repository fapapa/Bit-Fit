import React from "react"
import useWindowDimensions from "hooks/useWindowDimensions";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalRectSeries, LabelSeries } from 'react-vis';


export default function Graph(props) {
  const { height, width } = useWindowDimensions();
  const data1 = [
    {x: 1, x0: 0, y: 20, y0: 0},
    {x: 2, x0: 1, y: 5, y0: 0},
    {x: 4, x0: 2, y: 15, y0: 0}
  ];
  const data2 = [
    {x: 1, x0: 0, y: 20, y0: 0, label: 'day1'},
    {x: 2, x0: 1, y: 5, y0: 0, label: 'day2'},
    {x: 4, x0: 2, y: 15, y0: 0, label: 'day3'}
  ];
  const data3 = data2.map((day) => {
    const dayLabel = {
      x: day.x,
      y: day.y,
      label: day.label,
      xOffset: -((day.x-day.x0)/2),
      yOffset: (day.y === 0 ? 20 : -day.y0/2)

    }
    return dayLabel
  })
return (
  <div className="graph">
    <XYPlot 
      height={300} 
      width={300}
    >
      <VerticalRectSeries
        className={'graph-series'}
        data={data2}
        fill={'red'}
        stroke={'white'}
      />
      <LabelSeries
        data={data3}
      />
      <XAxis hideTicks title={props.titlex} position='middle' top={300} className="x-axis"/>
      <YAxis hideTicks title={props.titley} position='middle' left={-40} className="y-axis"/>
    </XYPlot>
  </div>
);
}
