import React, { useState } from "react";
import AwesomeButton from "./AwesomeButton";
import Axios from "axios";

export default function Application(props) {
  const fetchUserName = () => {
    Axios.get("/api/profile")
      .then(res => {
        setUserName(res.data["displayName"]);
      })
      .catch(err => console.error("Error:", err));
  };

  const [userName, setUserName] = useState(fetchUserName());

  const buttons = props.buttons.map((button, index) => {
    return (
      <AwesomeButton
        key={index}
        title={button.title}
        onClick={button.onClick || null}
      />
    );
  });

  return (
    <section className="navmenu">
      <div className="username">{userName}</div>
      {buttons}
    </section>
  );
}
