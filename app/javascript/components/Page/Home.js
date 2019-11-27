import React from "react";
import NavMenu from "../NavMenu";

export default function Home(props) {
  const buttons = [
    {
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
    }
  ];

  return (
    <main className="page">
      <section className="nav-menu-container">
        <NavMenu buttons={buttons} />
      </section>
      <section className="content-container">
        <section className="user-status-container">
          <a>Status</a>
        </section>
        <section className="fitigochi-container">
          <a>Home</a>
        </section>
      </section>
    </main>
  );
}
