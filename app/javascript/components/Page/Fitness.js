import React, { useState, useEffect } from "react";
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
        getFitnessData("week");
      },
    },
    {
      title: "Month",
      onClick: () => {
        getFitnessData("month");
      },
    },
    {
      title: "Year",
      onClick: () => {
        getFitnessData("year");
      },
    },
  ];

  const [graphData, setGraphData] = useState({
    maxValue: 30,
    titleX: "X-Axis Title",
    titleY: "Y-Axis Title",
  });

  useEffect(() => {
    getFitnessData("week");
  }, []);

  const getFitnessData = period => {
    Axios.get(`/api/fitness/${period}`)
      .then(res => {
        setGraphData({ ...graphData, data: res.data });
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };

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
            data={graphData.data}
            maxValue={graphData.maxValue}
            titleX={graphData.titleX}
            titleY={graphData.titleY}
          />
        </section>
      </section>
    </main>
  );
}
