import React from "react";

export default function Fitogachi(props) {

  const source = `/images/Blue-${props.level}-${props.state}.gif`;


  return (
    <div>
    {props.simulation && (
      <div>
        {source}
      </div>
    )}
    {!props.simulation && (
      <img 
      className={props.mirror ? "fitogachi-mirror" : "fitogachi"} 
      src={source}
      style={{filter: `hue-rotate(${props.color || '0deg'})`}}
      ></img>
    )}
    </div>
  );
}
