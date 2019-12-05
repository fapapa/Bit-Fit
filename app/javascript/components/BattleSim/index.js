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
  const [winner, setWinner] =useState(0);
  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(
    LOADING
  );

  const decideWinner = (bd) => {
    console.log(bd);
    totals = bd.days.reduce((total, day) => {total[0]+=day[0]; total[1]+=day[1]}, [0, 0]);
    console.log(totals);
    setWinner(totals[0] > totals[1] ? 1 : 2);
  }

    
  useEffect(()=> {
    Promise.resolve(axios.get(`/api/battle?id=${props.battleId}`))
    .then(res => {
      setBattleInfo(res.data);
      //decideWinner(res.data);
      setTimeout(() => transition(VERSUS), 500);
      setTimeout(() => transition(BATTLEFIELD), 2500);
    })
  }, [])

  return (<div className="battle-page">
    {mode === LOADING && (
      <Loading />
    )}
    {mode === VERSUS && (
      <Versus 
        usernames={[battleInfo.users[0][0], battleInfo.users[1][0]]}
      />
    )}
    {mode === BATTLEFIELD && (
      <Battlefield
        winner={battleInfo.winner}
        users={battleInfo.users}
        days={battleInfo.days}
        onSimulationEnd={props.onSimulationEnd}
      />
    )}
  </div>);
}
