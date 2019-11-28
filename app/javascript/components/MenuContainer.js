import React from "react";
import BattleBox from "./BattleBox"
import AwesomeButton from "./AwesomeButton";

export default function MenuContainer(props) {

  function renderBattleBoxes() {
    return props.boxes.map((box, index) => (
      <BattleBox
        key={index}
        old={false}
        active={true} 
      />
    ))
  }

  function renderDayBoxes() {
    return props.boxes.map(() => (
      <AwesomeButton key={index} title={button.title} />
    ))
  }

  const finalBoxes = props.boxType === "Battle" ? renderBattleBoxes() : renderDayBoxes()


  return (
    <nav className="menu-container">
      {finalBoxes}
    </nav>
  );
}
