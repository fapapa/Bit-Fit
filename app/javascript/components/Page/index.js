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
  const OPTIONS = "OPTIONS";

  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(HOME);
  
  const fetchUserName = () => {
    Axios.get("/api/profile")
      .then((res) => {setUserName(res.data["displayName"])})
      .catch(err => console.error("Error:", err));
  };

  const fetchUser = () => {
    Axios.get("/api/user")
      .then((res) => {setUser(res.data); setFitogachi(res.data.fitogachi);})
      .catch(err => console.error("Error:", err));
  };
  
  const [userName, setUserName] = useState(false);
  const [user, setUser] = useState(false);
  const [fitogachi, setFitogachi] = useState(false);

  useEffect(()=>{
    setUserName(fetchUserName());
    setUser(fetchUser());
  }, [])
  

  return (
    <div className="page-container">
      {mode === HOME && (
        <Home
          username={userName || '\u00A0'}
          onBattle={() => transition(BATTLE)}
          onFitness={() => transition(FITNESS)}
          onTheGym={() => transition(THEGYM)}
          onOptions={() => transition(OPTIONS)}
          fitogachi={fitogachi ? [fitogachi.name, fitogachi.color, fitogachi.current_energy, fitogachi.level, fitogachi.died_on, fitogachi.last_experience, fitogachi.current_exp] : null}
        />
      )}
      {mode === BATTLE && <Battle onHome={() => back()} username={userName || '\u00A0'} userid={user.id || null} />}
      {mode === FITNESS && <Fitness onHome={() => back()} username={userName || '\u00A0'} />}
      {mode === THEGYM && <TheGym onHome={() => back()} username={userName || '\u00A0'} fitogachi={[user.fitogachi.color, user.fitogachi.level]}/>}
      {mode === OPTIONS && <Options onHome={() => back()} username={userName || '\u00A0'} />}
    </div>
  );
}
