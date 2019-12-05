import React from "react";

export default function Fitogachi(props) {

  const source = `/images/${props.level}-${props.state}.gif`;

  return (
    <div>
    {props.simulation && (
      <div>
        {source}
      </div>
    )}
    {props.state === "dead" && (
      <div className="fitogachi-dead">
      <img
      className={props.mirror ? "fitogachi-ghost-mirror" : "fitogachi-ghost"}
      src={`/images/ghost.gif`}
      ></img>
      <img 
      className={props.mirror ? "fitogachi-body-mirror" : "fitogachi-body"} 
      src={`/images/${props.level}-dead.gif`}
      style={{filter: `hue-rotate(${`${props.color}deg` || '0deg'})`}}
      ></img>
      </div>
    )}
    {!props.simulation && props.state != "dead" && (
      <img 
      className={props.mirror ? "fitogachi-mirror" : "fitogachi"} 
      src={source}
      style={{filter: `hue-rotate(${`${props.color}deg` || '0deg'})`}}
      ></img>
    )}
    </div>
  );
}
