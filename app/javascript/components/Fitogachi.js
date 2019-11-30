import React from "react";

export default function Fitogachi(props) {

  const source = `/images/Blue-6-${props.state}.gif`;


  return (
     <img className={props.mirror ? "fitogachi-mirror" : "fitogachi"} src={source}></img>
  );
}
