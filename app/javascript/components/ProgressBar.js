import React, { useEffect, useState } from "react";
import Filler from "./Filler";

export default function ProgressBar(props) {

  const barScale = () => {
    if (props.current_points < props.stretch_goal) return props.stretch_goal;

    return (Math.floor(props.current_points / 100) + 1) * 100;
  };

  return (
    <div className="progress-bar-container">
      <label>{props.label}</label>
      <div className="progress-bar">
        <Filler
          current_points={props.current_points}
          daily_goal={props.daily_goal}
          stretch_goal={barScale()}
        />
        <div
          className="goal"
          style={{
            marginLeft: `${(props.daily_goal / barScale()) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
