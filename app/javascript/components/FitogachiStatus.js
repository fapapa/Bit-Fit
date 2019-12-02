import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeartsBar from "./HeartsBar";





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
      <article className="Fitogachi">
         <HeartsBar 
          energy={properties["current_energy"]}
         />
         
        <h1>Fitgochi Properties</h1>
        <ul>
          <li>Name: {properties["name"]}</li>
          <li>Color: {properties["color"]}</li>
          <li>Level: {properties["level"]}</li>
          <li>Current Exp: {properties["current_exp"]}</li>
          <li>Current Energy: {properties["current_energy"]}</li>
          <li>Last Experience: {properties["last_experience"]}</li>
        </ul>
      </article>

  );
}
