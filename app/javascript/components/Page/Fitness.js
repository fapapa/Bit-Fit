import React from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import Graph from "../Graph";

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
      },
    },
    {
      title: "Month",
      onClick: () => {
        console.log("The Gym");
      },
    },
    {
      title: "Year",
      onClick: () => {
        console.log("Friends");
      },
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
          <Graph
            data={[
              { x: 1, x0: 0, y: 20, y0: 0, label: "day1" },
              { x: 2, x0: 1, y: 5, y0: 0, label: "day2" },
              { x: 3, x0: 2, y: 15, y0: 0, label: "day3" },
              { x: 4, x0: 3, y: 10, y0: 0, label: "day4" },
            ]}
            maxValue={30}
            titleX={"X-Axis Title"}
            titleY={"Y-Axis Title"}
          />
        </section>
      </section>
    </main>
  );
}
