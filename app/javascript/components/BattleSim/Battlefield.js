import React from "react";

export default function Battlefield(props) {



  return (
    <div className="battlefield-background">
      <div className="battlefield-status">
        <div>Bar1</div>
        <div className="KO-icon-outer">
          <div className="KO-icon-inner">
            <a className="KO-text">K.O</a>
          </div>
        </div>
        <div>Bar2</div>
      </div>
      <div className="battlefield-container">
        <div className="character1">{props.battleInfo}</div>
        <div className="character2">Character(2)</div>
      </div>
    </div>
  );
}
