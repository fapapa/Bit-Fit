import React, { useState } from "react";
import NavMenu from "../NavMenu";
import AwesomeButton from "../AwesomeButton";
import MenuContainer from "../MenuContainer";
import Fitogachi from "../Fitogachi";

export default function TheGym(props) {
  const [currentColor, setCurrentColor] = useState(props.color || 0)
  const boxes = [
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
        <section className="gym-fitogachi">
          <Fitogachi 
            level={6}
            state={"idle"}
            color={currentColor}
            mirror={true}
            simulation={false}
          />
        </section>
      </section>
    </main>
  );
}
