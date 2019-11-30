import React from "react";
import classNames from "classnames";

export default function HealthBar(props) {

  return (
    <div className={props.mirror ? "health-background-mirror" : "health-background"}>
      <div 
        className={props.mirror ? "health-inner" : "health-inner"} 
        style={{width: props.percentage}}
      >
      <div 
        className={props.mirror ? "health-outer" : "health-outer"}
      >
      </div>
      </div>
    </div>
  );
}
