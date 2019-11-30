import React from "react";
import classNames from "classnames";

export default function HealthBar(props) {

  return (
    <div className={props.mirror ? "health-background-mirror" : "health-background"}>
      <div className="health-inner" style={{width: props.percentage}}>
        <div className="health-outer"></div>
      </div>
      <div className={props.mirror ? "health-username-mirror" : "health-username"}>
        {props.username}
      </div>
    </div>
  );
}
