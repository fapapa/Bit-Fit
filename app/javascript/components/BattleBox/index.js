import React, { useState } from "react";
import Active from "./Active";
import Complete from "./Complete";
import Countdown from "./Countdown";
import Past from "./Past";
import Pending from "./Pending";
import Waiting from "./Waiting";
import Challenge from "./Challenge";

export default function BattleBox(props) {
  // DIFFERENT MODES FOR MODE SELECTOR
  const CURRENT = "CURRENT";
  const HISTORY = "HISTORY";
  const ACTIVE = "ACTIVE";
  const COMPLETE = "COMPLETE";
  const COUNTDOWN = "COUNTDOWN";
  const PENDING = "PENDING";
  const PAST = "PAST";
  const CHALLENGE = "CHALLENGE";

  // SELECTOR HOOK
  const [container, setContainer] = useState(props.history ? HISTORY : CURRENT);
  const [historyMode, setHistoryMode] = useState(props.viewed ? PAST :COMPLETE);
  const [currentMode, setCurrentMode] = useState(props.pending ? (props.challenge ? CHALLENGE : PENDING) : (props.tomorrow ? COUNTDOWN : ACTIVE));

  return (
    <div className='battle-box-container'>
      {container === CURRENT && (
        <div className="current-battles">
        {currentMode === ACTIVE && (
          <Active 
            color1={props.color1}
            color2={props.color2}
            username1={props.username1}
            username2={props.username2}
            time={props.timeLeft}
          />
        )}
        {currentMode === PENDING && (
          <Pending 
            color1={props.color1}
            color2={props.color2}
            username1={props.username1}
            username2={props.username2}
          />
        )}
        {currentMode === COUNTDOWN && (
          <Countdown 
            color1={props.color1}
            color2={props.color2}
            username1={props.username1}
            username2={props.username2}
          />
        )}
        {currentMode === CHALLENGE && (
          <Challenge
            color={props.color2}
            username={props.username2}
            onAccept={props.Accept}
          />
        )}
        </div>
      )}
      {container === HISTORY &&(
        <div className="history-battles">
          {historyMode === COMPLETE && (
            <Complete 
              onClick={props.showAnimation}
            />
          )}
          {historyMode === PAST && (
            <Past 
              color1={props.color1}
              color2={props.color2}
              username1={props.username1}
              username2={props.username2}
              winner={props.winner}
            />
          )}
        </div>)
      }
    </div>
  );
}
