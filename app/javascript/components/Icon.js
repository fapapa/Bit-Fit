import React from "react";

export default function Icon(props) {
  return (
  <div className="icon-container">
    {/* <img
      className="icon-background"
      src={'/images/icon-background.png'}
    ></img> */}
    <img
      className={props.mirror ? "icon-mirror" : "icon"} 
      src={`/images/icon.png`}
      style={{filter: `hue-rotate(${`${props.color}deg` || '0deg'})`}}
    ></img>
  </div>
  );
}
