import React from "react";

export default function DayBox(props) {
  return (
    <div className="daybox-container">
      <div className="daybox-date">
        Date
      </div>
      <div className="daybox-stats">
        <div className="daybox-calories">2500</div>
        <div className="daybox-steps">10000</div>
        <div className="daybox-avg-heartrate">86</div>
      </div>
      <div className="daybox-labels">
        <div className="daybox-calories-label">cals</div>
        <div className="daybox-steps-label">steps</div>
        <div className="daybox-avg-heartrate-label">bpm</div>
      </div>
    </div>
  );
}
