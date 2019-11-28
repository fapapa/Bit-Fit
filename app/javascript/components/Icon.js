import React from "react";

export default function Icon(props) {
  return <img className="icon" src={`/images/icon-${props.color}-${props.user}.png`}></img>;
}
