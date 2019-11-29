import React, { useState } from "react";
import NavMenu from "../NavMenu";
import Status from "../Status";
import Fitogachi from "../Fitogachi";

export default function Home(props) {
  const [notifications, setNotifications] = useState(3);

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
        <NavMenu buttons={buttons} />
      </section>
      <section className="content-container">
        <section className="user-status-container">
          <Status />
        </section>
        <section className="fitigochi-container">
          <Fitogachi />
        </section>
      </section>
    </main>
  );
}
