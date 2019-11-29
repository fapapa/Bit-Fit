import React from "react";
import Loading from "./Loading";
import Versus from "./Versus";
import Battlefield from "./Battlefield";
import useVisualMode from "hooks/useVisualMode";

export default function BattleSim(props) {
  // DIFFERENT MODES FOR MODE SELECTOR
  const LOADING = "LOADING";
  const VERSUS = "VERSUS";
  const BATTLEFIELD = "BATTLEFIELD";

  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(
    LOADING
  );

  

  return (<div className="battle-page">
    {mode === LOADING && (
      <Loading />
    )}
    {mode === VERSUS && (
      <Versus />
    )}
    {mode === BATTLEFIELD && (
      <Battlefield />
    )}
  </div>);
}
