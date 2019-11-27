import React from "react";
import NavMenu from "../NavMenu";

export default function Friends(props) {
  const buttons = [
    {
      title: "Home",
      onClick: props.onHome,
    },
    {
      title: "Find a Foe",
      onClick: () => {
        console.log("Fitness");
      }
    },
    {
      title: "Fight a Friend",
      onClick: () => {
        console.log("The Gym");
      }
    },
    {
      title: "Fistory",
      onClick: () => {
        console.log("Friends");
      }
    },
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
          <a>Battle</a>
        </section>
      </section>
    </main>
  );
}
