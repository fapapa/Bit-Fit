import React from "react";
import NavMenu from "../NavMenu";
import MenuContainer from "../MenuContainer";

export default function Battle(props) {
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
        <section className="battle-content-container">
          <div className="battle-menu-container">
          <MenuContainer
          boxType={'Battle'}
          boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          />
          </div>
        </section>
        <section className="battle-fitigochi-container">
          <a>Battle</a>
        </section>
      </section>
    </main>
  );
}
