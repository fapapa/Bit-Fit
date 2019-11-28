import React from "react";
import versusIcon from "../../../assets/images/versus.png";

export default function Versus(props) {
  return (
    <div className="versus-background">
      <div className="loading-background">
        <div className="loading-icon-area">
          <img className="versus-versus-icon" src={versusIcon}></img>
        </div>
      </div>
      <div className="left-pillar">
        <a className="big-username">{"username2"}</a>
      </div>
      <div className="right-pillar">
        <a className="big-username">{"username1"}</a>
      </div>
    </div>
  );
}
