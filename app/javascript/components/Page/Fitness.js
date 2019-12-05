import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import Graph from "../Graph";
import MenuContainer from "../MenuContainer";

export default function Fitness(props) {
  const [currentButton, setCurrentButton] = useState("Week");
  const [graphData, setGraphData] = useState({
    titleX: "Days",
    titleY: "Calories",
  });
  
  
  const getFitnessData = period => {
    Axios.get(`/api/fitness/${period}`)
      .then(res => {
        setGraphData({ ...graphData, data: res.data, period: period });
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };
  
  const buttons = [
    {
      title: "Home",
      onClick: props.onHome,
    },
    {
      title: "Week",
      onClick: () => {
        getFitnessData("week");
        setCurrentButton("Week");
      },
    },
    {
      title: "Month",
      onClick: () => {
        getFitnessData("month");
        setCurrentButton("Month");
      },
    },
    {
      title: "Year",
      onClick: () => {
        getFitnessData("year");
        setCurrentButton("Year");
      },
    },
  ];


  useEffect(() => {
    getFitnessData("week");
  }, []);


  return (
    <div className="fitness-background">
    <main className="page">
      <section className="nav-menu-container">
        <NavMenu buttons={buttons} username={props.username} currentButton={currentButton} />
      </section>
      <section className="fitness-content-container">
        <section className="graph-container">
          <Graph
            data={graphData.data}
            maxValue={graphData.maxValue}
            titleX={graphData.titleX}
            titleY={graphData.titleY}
          />
        </section>
        <div className="daybox-menu">
          <MenuContainer 
            boxType={"Day"}
            boxes={graphData.data || []}
          />
        </div>
      </section>
    </main>
    </div>
  );
}
