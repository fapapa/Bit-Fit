import React from "react";

export default function DayBox(props) {
  return (
    <div className="daybox-container">
      <div className="daybox-date">
        {props.date || "Date"}
      </div>
      <div className="daybox-stats">
        <div className="daybox-calories">{props.calories || 555}</div>
        <div className="daybox-steps">{props.steps || 10000}</div>
      </div>
      <div className="daybox-labels">
        <div className="daybox-calories-label">cals</div>
        <div className="daybox-steps-label">steps</div>
      </div>
    </div>
  );
}
