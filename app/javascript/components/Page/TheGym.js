import React from "react";
import NavMenu from "../NavMenu";
import AwesomeButton from "../AwesomeButton";
import MenuContainer from "../MenuContainer";

export default function TheGym(props) {
  const buttons = [
    {
      title: "Home",
      onClick: props.onHome
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
    }
  ];

  return (
    <main className="page">
      <section className="gym-menu-container">
        <div className="username">{props.username}</div>
        <AwesomeButton title="Home" onClick={props.onHome} />
        <div className="swatch-container">
        <MenuContainer 
          boxType={"Swatch"}
          boxes={[1,2,3,4,5,6]}
        />
        </div>
      </section>
      <section className="content-container">
        <section className="user-status-container">
          <a>Status</a>
        </section>
        <section className="fitigochi-container">
          <a>The Gym</a>
        </section>
      </section>
    </main>
  );
}
