import React from "react";
import Active from "./Active";
import Complete from "./Complete";
import Countdown from "./Countdown";
import Past from "./Past";
import Pending from "./Pending";
import Waiting from "./Waiting";

import useVisualMode from "hooks/useVisualMode";

export default function BattleBox(props) {
  // DIFFERENT MODES FOR MODE SELECTOR
  const ACTIVE = "ACTIVE";
  const COMPLETE = "COMPLETE";
  const COUNTDOWN = "COUNTDOWN";
  const PENDING = "PENDING";
  const WAITING = "WAITING";
  const PAST = "PAST";

  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(
    props.past ? PAST : props.active ? ACTIVE : PENDING
  );

  return (
    <div className='battle-box-container'>
      {mode === ACTIVE && (
        <Active 
          username1={"Jake"}
          username2={"Fabio"}
        />
      )}
      {mode === COMPLETE && (
        <Complete />
      )}
      {mode === COUNTDOWN && (
        <Countdown />
      )}
      {mode === PENDING && (
        <Pending />
      )}
      {mode === WAITING && (
        <Waiting />
      )}
      {mode === PAST && (
        <Past />
      )}
    </div>
  );
}
