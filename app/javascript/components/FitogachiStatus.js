import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeartsBar from "./HeartsBar";




import ProgressBar from "./ProgressBar";
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
            // properties
            // <li>Current Exp: {properties["current_exp"]}</li>
            // <li>Current Energy: {properties["current_energy"]}</li>
            // <li>Last Experience: {properties["last_experience"]}</li>

  return (
    <section className="fitogachi-container-box">
        <section className="fitogachi-container-name">
          Fitogachi's Name{properties["name"]}
        </section>
        <section className="fitogachi-container-gif">
          <Fitogachi 
          level={properties["6"]}
          color={properties["0deg"]}
          state={"idle"}
          mirror={false}
          />
        </section>
        <section className="fitogachi-container-hearts-bar">
          fitogachi hearts{properties["current_energy"]}
        </section>
      <section className="fitogachi-container-status-area">
        <section className="fitogachi-container-experience-bar">
          <ProgressBar
            current_points={200}
            daily_goal={500}
            stretch_goal={500}
          />
        </section>
        <section className="fitogachi-container-level">
          level 
          <div className="level-number">
            7{properties["level"]}
          </div>
        </section>
      </section>
    </section>
  );
}
