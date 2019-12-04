import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeartsBar from "./HeartsBar";
import ExpBar from "./ExpBar";
import Fitogachi from "./Fitogachi";

export default function FitogachiStatus(props) {
  const fetchFitogachi = () => {
    Axios.get("/api/fitogachi")
      .then(res => {
        setProperties(res.data);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };
  
  const [properties, setProperties] = useState({});
  useEffect(() => {
    fetchFitogachi();
  }, []);

  const [level, setLevel] = useState(Math.floor(200/ 500) + 1)
  const levelUp = () => {
    setLevel(level + 1);
  }
  
  return (
    <section className="fitogachi-container-box">
      <section className="fitogachi-container-name">
        {properties["name"]}
      </section>
      <section className="fitogachi-container-hearts-bar">
        <HeartsBar 
          energy={properties["current_energy"]}
         />
        </section>
        <section className="fitogachi-container-gif">
          <Fitogachi 
          level={properties["level"] || 6}
          color={properties["color"] || 0}
          state={"idle"}
          mirror={false}
          died_on={properties["died_on"]}
          />
        </section>
        
      <section className="fitogachi-container-status-area">
        <section className="fitogachi-container-experience-bar">
          <ExpBar
            current_exp={properties["current_exp"]}
            last_experience={properties["last_experience"]}
            goal={500}
            onChange={() => {levelUp()} }
          />
        </section>
        <section className="fitogachi-container-level">
          level 
          <div className="level-number">
            {level}
          </div>
        </section>
      </section>
    </section>
  );
}
