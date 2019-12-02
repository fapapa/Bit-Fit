import React from "react";
import BattleBox from "./BattleBox"
import AwesomeButton from "./AwesomeButton";
import SwatchBox from "./SwatchBox";

export default function MenuContainer(props) {

  function renderBattleBoxes() {
    return props.boxes.map((box, index) => (
      <BattleBox
        key={index}
        old={false}
        active={true}
        color={props.color || 0}
      />
    ))
  }

  function renderDayBoxes() {
    return props.boxes.map((box, index) => (
      <AwesomeButton key={index} title={button.title} />
    ))
  }

  function renderFriendBoxes() {
    return props.boxes.map((box, index) => (
      <AwesomeButton key={index} title={index} />
    ))
  }

  function renderSwatchBoxes() {
    return props.boxes.map((box, index) => (
      <SwatchBox 
        key={index} 
        image={box.image} 
        level={props.level}
        requirement={box.requirement}
        onClick={box.onClick}
        current={props.current===box.requirement}
        />

    ))
  }

  function renderNoneBoxes() {
    return props.boxes.map((index) => (
      <AwesomeButton key={index} title={"none"} />
    ))
  }


function renderBoxes() {
  switch (props.boxType) {
    case "Battle":
      return renderBattleBoxes();

    case "Friend":
      return renderFriendBoxes();

    case "Day":
      return renderDayBoxes();
    
    case "Swatch":
      return renderSwatchBoxes();

    default:
      if(props.boxes){
        return renderNoneBoxes();
      } else {
        return "No props passed"
      }
  }
}

  return (
    <nav className="menu-container">
      {renderBoxes()}
    </nav>
  );
}
