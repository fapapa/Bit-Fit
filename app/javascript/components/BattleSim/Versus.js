import React, { useState } from "react";
import versusIcon from "../../../assets/images/versus.png";

export default function Versus(props) {

  return (
    <div className="versus-background">
      <div className="loading-background">
        <div className="loading-icon-area">
          <img className="versus-versus-icon versus-grow" src={versusIcon}></img>
        </div>
      </div>
      <div className="pillar-holder shake-once">
        <div className="left-pillar left-pillar-animation">
          <a className="big-username">{"username2"}</a>
        </div>
        <div className="right-pillar right-pillar-animation">
          <a className="big-username">{"username1"}</a>
        </div>
      </div>
    </div>
  );
}
