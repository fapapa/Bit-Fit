import React from "react";
import useWindowDimensions from "hooks/useWindowDimensions";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalRectSeries,
  LabelSeries,
} from "react-vis";

export default function Graph(props) {
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const { height, width } = useWindowDimensions();
  const maxValue =
    props.data &&
    props.data.reduce((max, day) => {
      return Math.max(day.calories, max);
    }, 0);

  let data2;
  console.log("Props in Graph:", props);
  if (props.data && props.period === "year") {
    data2 = props.data.map(record => {
      const begin = new Date(`${record.year}-${record.month}-${1}`);
      const end = new Date(
        `${record.year}-${record.month}-${daysInMonth(
          record.month,
          record.year
        )}`
      );

      console.log("Begin:", begin);
      const monthData = {
        x: end,
        x0: begin,
        y: record.calories,
        y0: 0,
        label: `Year: ${record.year}, Month: ${record.month}`,
      };
      return monthData;
    });
  } else if (props.data) {
    data2 = props.data.map(day => {
      const date = new Date(day.stats_date);

      const dayData = {
        x: date.addDays(1),
        x0: date,
        y: day.calories,
        y0: 0,
        label: day.stats_date,
      };
      return dayData;
    });
  } else {
    data2 = false;
  }
  const data3 =
    data2 &&
    data2.map(day => {
      const dayLabel = {
        x: day.x,
        y: day.y,
        label: day.label,
        xOffset: -(width / (data2.length * 4) - 12),
        yOffset: 20, //(height * 0.7 - 50) * (day.y / maxValue) - height * 0.08,
        rotation: 270,
      };
      return dayLabel;
    });

  return (
    data2 && (
      <div className="graph">
        <XYPlot
          height={height * 0.7}
          width={width * 0.5}
          yDomain={[0, maxValue]}
        >
          <VerticalRectSeries
            className={"graph-series"}
            data={data2}
            fill={"#ee3253"}
            stroke={"white"}
          />
          <LabelSeries
            className={"graph-labels"}
            labelAnchorX={"end"}
            labelAnchorY={"text-after-edge"}
            data={data3}
          />
          <XAxis
            hideTicks
            title={props.titleX}
            position="middle"
            top={height * 0.7}
            className="x-axis"
          />
          <YAxis
            hideTicks
            title={props.titleY}
            position="middle"
            left={-30}
            className="y-axis"
          />
        </XYPlot>
      </div>
    )
  );
}
