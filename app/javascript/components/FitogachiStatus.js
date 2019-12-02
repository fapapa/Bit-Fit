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


  return (
    <section className="fitogachi-container-box">
      <section className="fitogachi-container-name">
        Fitogachi's Name{properties["name"]}
      </section>
      <section className="fitogachi-container-hearts-bar">
        <HeartsBar 
          energy={properties["current_energy"]}
         />
        </section>
        <section className="fitogachi-container-gif">
          <Fitogachi 
          level={properties["level"] || 6}
          color={'0deg'}
          state={"idle"}
          mirror={false}
          />
        </section>
        
      <section className="fitogachi-container-status-area">
        <section className="fitogachi-container-experience-bar">
          <ProgressBar
            current_points={properties["current_exp"]}
            daily_goal={500}
            stretch_goal={0}
          />
        </section>
        <section className="fitogachi-container-level">
          level 
          <div className="level-number">
            6{properties["level"]}
          </div>
        </section>
      </section>
    </section>
  );
}
