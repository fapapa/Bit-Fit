import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Versus from "./Versus";
import Battlefield from "./Battlefield";
import useVisualMode from "hooks/useVisualMode";
import axios from "axios";

export default function BattleSim(props) {
  // DIFFERENT MODES FOR MODE SELECTOR
  const LOADING = "LOADING";
  const VERSUS = "VERSUS";
  const BATTLEFIELD = "BATTLEFIELD";
  const [battleInfo, setBattleInfo] = useState([]);
  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(
    LOADING
  );

  useEffect(()=> {
    Promise.resolve(axios.get("/api/battle"))
    .then(res => {
      setBattleInfo(res.data.last_name);
      transition(VERSUS);
      setTimeout(() => transition(BATTLEFIELD), 2000);
    })
  }, [])

  return (<div className="battle-page">
    {mode === LOADING && (
      <Loading />
    )}
    {mode === VERSUS && (
      <Versus 
        usernames={["Jake", "John"]}
      />
    )}
    {mode === BATTLEFIELD && (
      <Battlefield
        winner={1}
        users={[["Jake", 6, '0deg'],["John", 6, '0deg']]}
        days={[[0, 0],[50, 50]]}
        onSimulationEnd={props.onSimulationEnd}
      />
    )}
  </div>);
}
