import React from "react";

export default function Fitogachi(props) {

  const source = `/images/Blue-${props.level}-${props.state}.gif`;


  return (
    <div>
      {source}
    </div>
    //  <img className={props.mirror ? "fitogachi-mirror" : "fitogachi"} src={source}></img>
  );
}
