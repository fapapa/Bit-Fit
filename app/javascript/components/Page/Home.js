import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import Status from "../Status";
import FitogachiStatus from "../FitogachiStatus";

export default function Home(props) {
  const [notifications, setNotifications] = useState(0);
  useEffect(() => {
    Axios.get("/api/battles/notifications")
      .then(res => {
        setNotifications(res.data);
      })
      .catch(err => {
        console.error("Error", err);
      });
  }, []);

  const buttons = [
    {
      notifications,
      title: "Battle",
      onClick: props.onBattle,
    },
    {
      title: "Fitness",
      onClick: props.onFitness,
    },
    {
      title: "The Gym",
      onClick: props.onTheGym,
    },
    {
      title: "Friends",
      onClick: props.onFriends,
    },
    {
      title: "Options",
      onClick: props.onOptions,
    },
  ];

  return (
    <main className="page">
      <section className="nav-menu-container">
        <NavMenu buttons={buttons} username={props.username} />
      </section>
      <section className="content-container">
        <section className="user-status-container">
          <Status />
        </section>
        <section className="fitigochi-container">
          <FitogachiStatus />
        </section>
      </section>
    </main>
  );
}
