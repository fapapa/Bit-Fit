import React, { useState } from "react";
import Axios from "axios";

function ProgressBar(props) {
  return (
    <div>
      <h2>{props.label}</h2>
      <p>Burned so far: {props.value}</p>
      <p>Max: {props.max}</p>
      <p>Ticks: {props.ticks.join(", ")}</p>
    </div>
  );
}

export default function Status(props) {
  return (
    <section className="status-area">
      <ProgressBar
        label="Calories"
        value={300}
        max={1250}
        ticks={["none", "250", "none", "500", "none", "750", "none", "goal"]}
      />
      <ProgressBar
        label="Steps"
        value="3653"
        max={12000}
        ticks={["none", "2500", "none", "5000", "none", "7500", "none", "goal"]}
      />
    </section>
  );
}
