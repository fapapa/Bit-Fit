import React, { useState, useEffect} from "react";
import Axios from "axios";
import Home from "./Home";
import Battle from "./Battle";
import Fitness from "./Fitness";
import TheGym from "./TheGym";
import Options from "./Options";
import useVisualMode from "hooks/useVisualMode";

export default function HomePage(props) {
  // DIFFERENT MODES FOR MODE SELECTOR
  const HOME = "HOME";
  const BATTLE = "BATTLE";
  const FITNESS = "FITNESS";
  const THEGYM = "THEGYM";
  

  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(HOME);
  
  const fetchUserName = () => {
    Axios.get("/api/profile")
      .then((res) => {setUserName(res.data["displayName"])})
      .catch(err => console.error("Error:", err));
  };
  
  const [userName, setUserName] = useState(fetchUserName());
  

  return (
    <div className="page-container">
      {mode === HOME && (
        <Home
          username={userName || '\u00A0'}
          onBattle={() => transition(BATTLE)}
          onFitness={() => transition(FITNESS)}
          onTheGym={() => transition(THEGYM)}
          onOptions={() => window.location = "sessions/logout"}
/>
      )}
      {mode === BATTLE && <Battle onHome={() => back() } username={userName || '\u00A0'} />}
      {mode === FITNESS && <Fitness onHome={() => back()} username={userName || '\u00A0'} />}
      {mode === THEGYM && <TheGym onHome={() => back()} username={userName || '\u00A0'} />}
    </div>
  );
}
