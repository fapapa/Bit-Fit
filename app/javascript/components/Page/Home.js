import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import Status from "../Status";
import FitogachiStatus from "../FitogachiStatus";

export default function Home(props) {

  const buttons = [
    {
      notifications: props.notifications,
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
      title: "Logout",
      onClick: props.onOptions,
    },
  ];

  return (
    <div className="page-background">
    <div className="sliding-background"></div>
    <div className="sliding-background-2"></div>
    <div className="sliding-background-3"></div>
    <div className="sliding-background-4"></div>
    <main className="page">
      <section className="nav-menu-container">
        <NavMenu buttons={buttons} username={props.username} />
      </section>
      <section className="content-container">
        <section className="user-status-container">
          <Status />
        </section>
        <section className="fitigochi-container">
          <FitogachiStatus 
            name={props.fitogachi ? props.fitogachi[0] : "No Name"}
            color={props.fitogachi ? props.fitogachi[1] : 0}
            current_energy={props.fitogachi ? props.fitogachi[2] : 5}
            level={props.fitogachi ? props.fitogachi[3] : 0}
            died_on={props.fitogachi ? props.fitogachi[4] : false}
            last_experience={props.fitogachi ? props.fitogachi[5] : 0}
            current_exp={props.fitogachi ? props.fitogachi[6] : 0}
            onExpSet={props.onExpSet}
          />
        </section>
      </section>
    </main>
    </div>
  );
}
