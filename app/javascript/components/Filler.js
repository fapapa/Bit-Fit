import React, { useState, useEffect } from "react";

export default function Filler(props) {
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const goalPercent = (props.daily_goal / props.stretch_goal) * 100;
  const percentage = (props.current_points / props.stretch_goal) * 100;
  
  const animateBar = (initial, final) => {
    if (initial > final) {
      for (let i = initial * 2; i >= final * 2; i--) {
        setTimeout(() => {
          setAnimationPercentage(i / 2);
        }, 15 * ((1 / i) * 10000));
      }
    } else {
      for (let i = initial * 2; i < final * 2; i++) {
        setTimeout(() => {
          setAnimationPercentage(i / 2);
        }, 15 * i);
      }
    }
  };

  useEffect(() => {
    animateBar(animationPercentage, percentage);
  }, [percentage]);

  return (
    <div className={"filler"}>
      <div
        className={"filler-increment"}
        style={{
          width: `${animationPercentage}%`,
          maxWidth: `${goalPercent}%`,
          background: "#00A6ED"
        }}
      />
      <div
        className={"filler-increment"}
        style={{
          width: `${animationPercentage - goalPercent}%`,
          background: "#F6511D"
        }}
      />
    </div>
  );
}
