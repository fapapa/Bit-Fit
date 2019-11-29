import React, { useState } from "react";
import Axios from "axios";

export default function Fitogachi(props) {
  const fetchFitogachi = () => {
    Axios.get("/api/fitogachi")
      .then(res => {
        setProperties(res.data);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };

  const [properties, setProperties] = useState(fetchFitogachi());

  return <article className="Fitogachi">{}</article>;
}
