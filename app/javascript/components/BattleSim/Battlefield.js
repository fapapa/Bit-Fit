import React, { useState } from "react";
import Fitogachi from "../Fitogachi"
import HealthBar from "./HealthBar"

export default function Battlefield(props) {
  const PHASE1 = ["attack", "hurt"];
  const PHASE2 = ["hurt", "attack"];
  const IDLE = ["idle", "idle"];

  const [gif, setGif] = useState(IDLE);



  return (
    <div className="battlefield-background">
      <div className="battlefield-status">
        <HealthBar 
          percentage={'50%'}
          mirror={true}
        />
        <div className="KO-icon-outer">
          <div className="KO-icon-inner">
            <a className="KO-text">K.O</a>
          </div>
        </div>
        <HealthBar 
          percentage={'50%'}
          mirror={false}
        />
      </div>
      <div className="battlefield-container">
        <div className="character-container">
          <Fitogachi 
           state={gif[0]}
           mirrow={false}
          />
        </div>
        <div className="character-container">
          <Fitogachi
            state={gif[1]}
            mirror={true}
          />
        </div>
      </div>
    </div>
  );
}
