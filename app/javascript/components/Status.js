import React, { useState, useEffect } from "react";
import Axios from "axios";

import ProgressBar from "./ProgressBar";

export default function Status(props) {
  const [currentCalories, setCurrentCalories] = useState(0);
  const [currentSteps, setCurrentSteps] = useState(0);
  useEffect(() => {
    Axios.get("/api/calories")
      .then(res => setCurrentCalories(res.data))
      
      .catch(err => console.error(err));

    Axios.get("/api/steps")
      .then(res => setCurrentSteps(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <section className="status-area">
      <ProgressBar
        label="Calories"
        current_points={currentCalories}
        daily_goal={500}
        stretch_goal={600}
      />
      <ProgressBar
        label="Steps"
        current_points={currentSteps}
        daily_goal={10000}
        stretch_goal={12000}
      />
    </section>
  );
}
