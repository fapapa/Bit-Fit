import React from "react";
import AwesomeButton from "../AwesomeButton";

export default function Rules(props) {

  return (
  
  <div className="rules-container">
    <div className="rules-question">
      <h1 className="findafoe-tagline">NEED AN EXCUSE TO WORK OUT?</h1>
    <p>but lack any kind of personal relationship with other humans who work out? Challenge a random person to a week of FITNESS where you compete to lose the most calories across a three day period and then watch the outcome as your Fitogachi dukes it out with your opponent's using you calories burned as pure POWER!
    </p>
     <p className="disclaimer"> *Difference in level provides no empirical advantage* </p>
    </div>
    <div className="rules-answer">
      <AwesomeButton 
        title={"CHALLENGE"}
        onClick={props.onClick}
      />
    </div>
  </div>
  
  );
}
