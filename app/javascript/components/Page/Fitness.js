import React from "react";
import NavMenu from "../NavMenu";

export default function Fitness(props) {
  const buttons = [
    {
      title: "Home",
      onClick: props.onHome,
    },
    {
      title: "Week",
      onClick: () => {
        console.log("Fitness");
      }
    },
    {
      title: "Month",
      onClick: () => {
        console.log("The Gym");
      }
    },
    {
      title: "Year",
      onClick: () => {
        console.log("Friends");
      }
    },
  ];

  return (
    <main className="page">
      <section className="nav-menu-container">
        <NavMenu buttons={buttons} username={props.username} />
      </section>
      <section className="content-container">
        <section className="user-status-container">
          <a>Status</a>
        </section>
        <section className="fitigochi-container">
          <a>Fitness</a>
        </section>
      </section>
    </main>
  );
}
