import React from "react";

export default function Icon(props) {
  return <img 
  className="icon" 
  src={`/images/icon-${props.user}.png`}
  style={{filter: `hue-rotate(${`${props.color}deg` || '0deg'})`}}
  ></img>;
}
