import React, { useState, useEffect } from "react";
import Axios from "axios";
import Home from "./Home";
import Battle from "./Battle";
import Fitness from "./Fitness";
import TheGym from "./TheGym";
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
      .then(res => {
        setUserName(res.data["displayName"]);
      })
      .catch(err => console.error("Error:", err));
  };

  const fetchUser = () => {
    Axios.get("/api/user")
      .then(res => {
        setUser(res.data);
        setFitogachi(res.data.fitogachi);
      })
      .catch(err => console.error("Error:", err));
  };

  const updateNotifications = () => {
    Axios.get("/api/battles/notifications")
      .then(res => {
        setNotifications(res.data);
      })
      .catch(err => {
        console.error("Error", err);
      });
  }

  const updateFitogachi = () => {
    Axios.get("/api/fitogachi")
      .then((res) => setFitogachi(res.data))
      .catch(err => console.error("Error:", err));
  }

  const updateColor = (newColor) => {
    transition(HOME);
    Axios.put(`/api/color`, {color: newColor})
      .then(() => setFitogachi({...fitogachi, color: newColor}))
      .catch(err => console.error("Error:", err));
  }
  
  const [userName, setUserName] = useState(false);
  const [user, setUser] = useState(false);
  const [fitogachi, setFitogachi] = useState(false);
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    setUserName(fetchUserName());
    setUser(fetchUser());
    updateNotifications();
  }, []);

  return (
    <div className="page-container">
      {mode === HOME && (
        <Home
          username={userName || "\u00A0"}
          onBattle={() => transition(BATTLE)}
          onFitness={() => transition(FITNESS)}
          onTheGym={() => transition(THEGYM)}
          onOptions={() => (window.location = "sessions/logout")}
          notifications={notifications}
          fitogachi={
            fitogachi
              ? [
                  fitogachi.name,
                  fitogachi.color,
                  fitogachi.current_energy,
                  fitogachi.level,
                  fitogachi.died_on,
                  fitogachi.last_experience,
                  fitogachi.current_exp,
                ]
              : null
          }
        />
      )}
      {mode === BATTLE && (
        <Battle
          onHome={() => back()}
          username={userName || "\u00A0"}
          userid={user.id || null}
          updateNotifications={() => updateNotifications()}
        />
      )}
      {mode === FITNESS && (
        <Fitness onHome={() => back()} username={userName || "\u00A0"} />
      )}
      {mode === THEGYM && (
        <TheGym
          onHome={() => back()}
          onSave={(color) => updateColor(color)}
          username={userName || "\u00A0"}
          fitogachi={[user.fitogachi.color, user.fitogachi.level]}
        />
      )}
    </div>
  );
}
