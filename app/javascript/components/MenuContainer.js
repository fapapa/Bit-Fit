import React from "react";
import AwesomeButton from "./AwesomeButton";

export default function MenuContainer(props) {
  const buttons = [
    { title: "Battle" },
    { title: "Fitness" },
    { title: "Gym" },
    { title: "Coffee" },
    { title: "Stats" },
    { title: "These" },
    { title: "Are" },
    { title: "More" },
    { title: "Buttons" }
  ];

  return (
    <nav className="menu-container">
      {buttons.map((button, index) => (
        <AwesomeButton key={index} title={button.title} />
      ))}
    </nav>
  );
}
