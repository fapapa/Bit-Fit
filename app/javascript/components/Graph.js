import React from "react"
import useWindowDimensions from "hooks/useWindowDimensions";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalRectSeries, LabelSeries } from 'react-vis';


export default function Graph(props) {
  const { height, width } = useWindowDimensions();
  const maxValue = props.maxValue;
  const data2 = [
    {x: 1, x0: 0, y: 20, y0: 0, label: 'day1'},
    {x: 2, x0: 1, y: 5, y0: 0, label: 'day2'},
    {x: 3, x0: 2, y: 15, y0: 0, label: 'day3'},
    {x: 4, x0: 3, y: 10, y0: 0, label: 'day4'},
  ];
  const data3 = data2.map((day) => {
    const dayLabel = {
      x: day.x,
      y: day.y,
      label: day.label,
      xOffset: -(((width)/(data2.length*4))-12), //-((day.x-day.x0)/2),
      yOffset: 20,//(height-50)*(day.y/maxValue),
      rotation: 270
    }
    return dayLabel
  });
return (
  <div className="graph">
    <XYPlot 
      height={height*0.7} 
      width={width*0.5}
      yDomain={[0, maxValue]}
    >
      <VerticalRectSeries
        className={'graph-series'}
        data={data2}
        fill={'red'}
        stroke={'white'}
      />
      <LabelSeries
        className={'graph-labels'}
        labelAnchorX={'end'}
        labelAnchorY={'text-after-edge'}
        data={data3}
      />
      <XAxis hideTicks title={props.titlex} position='middle' top={height*0.7} className="x-axis"/>
      <YAxis hideTicks title={props.titley} position='middle' left={-40} className="y-axis"/>
    </XYPlot>
  </div>
);
}
