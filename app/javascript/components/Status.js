import React, { useState, useEffect } from "react";
import Axios from "axios";

import ProgressBar from "./ProgressBar";

export default function Status(props) {
  const [currentCalories, setCurrentCalories] = useState(0);
  const [currentSteps, setCurrentSteps] = useState(0);

  useEffect(() => {
    Axios.get("/api/calories")
      .then(res => {
        setCurrentCalories(res.data);
      })
      .catch(err => console.error(err));

    Axios.get("/api/steps")
      .then(res => {
        setCurrentSteps(res.data);
      })
      .catch(err => console.error(err));
    // setCurrentSteps(8321);
  }, []);

  return (
    <section className="status-area">
      <ProgressBar
        current_points={currentCalories}
        daily_goal={Math.max(500, currentCalories)}
      />
      <ProgressBar current_points={currentSteps} daily_goal={10000} />
    </section>
  );
}
