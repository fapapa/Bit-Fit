import React from "react";
import BattleBox from "./BattleBox";
import AwesomeButton from "./AwesomeButton";
import SwatchBox from "./SwatchBox";
import DayBox from "./DayBox";
import FriendBox from "./FriendBox";
import Searching from "./FindaFoe.js/Searching";

export default function MenuContainer(props) {
  function renderHistoryBattleBoxes() {
    if(props.boxes.length < 1){
      return <Searching />;
    } else {
    return props.boxes.map((box, index) => {
      const creator = box.creator_id === props.userid;
      return (
       <BattleBox
        key={index}
        history={true}
        color1={creator ? box.creator.fitogachi.color : box.opponent.fitogachi.color || 0}
        color2={creator ? box.opponent.fitogachi.color : box.creator.fitogachi.color || 0}
        username1={creator ? box.creator.username : box.opponent.username}
        username2={creator ? box.opponent.username : box.creator.username}
        viewed={creator ? box.creator_viewed : box.opponent_viewed}
        winner={box.winner_id === props.userid ? true : false}
        showAnimation={() => props.showAnimation(box.id)}
      />
    )})};
  }

  function renderCurrentBattleBoxes() {
    function checkTimeLeft(date1, date2) {
      var one_day = 1000 * 60 * 60 * 24;

      var date1_ms = date1.getTime();
      var date2_ms = date2.getTime();

      var difference_ms = date2_ms - date1_ms;

      return Math.round(difference_ms / one_day);
    }
    console.log(props.boxes);
    console.log(props.boxes.length);
    if(props.boxes.length < 1){
      return <Searching />;
    } else {
    return props.boxes.map((box, index) => {
      const creator = box.creator_id === props.userid;
      return (
       <BattleBox
        key={index}
        history={false}
        color1={creator ? box.creator.fitogachi.color : box.opponent.fitogachi.color || 0}
        color2={creator ? box.opponent.fitogachi.color : box.creator.fitogachi.color || 0}
        username1={creator ? box.creator.username : box.opponent.username}
        username2={creator ? box.opponent.username : box.creator.username}
        tomorrow={checkTimeLeft(new Date(box.start_date), new Date.now()) < 0}
        pending={box.start_date === null ? true : false}
        timeLeft={checkTimeLeft(new Date.now(), new Date(box.end_date))}
      />
    )});}
  }

  function renderDayBoxes() {
    return props.boxes.map((box, index) => <DayBox key={index} />);
  }

  function renderFriendBoxes() {
    return props.boxes.map((box, index) => (
      <FriendBox
        key={index}
        status={box.status}
        username={box.username}
        color={box.color}
      />
    ));
  }

  function renderSwatchBoxes() {
    return props.boxes.map((box, index) => (
      <SwatchBox
        key={index}
        image={box.image}
        level={props.level}
        requirement={box.requirement}
        onClick={box.onClick}
        current={props.current === box.requirement}
      />
    ));
  }

  function renderNoneBoxes() {
    return props.boxes.map(index => (
      <AwesomeButton key={index} title={"none"} />
    ));
  }

  function renderBoxes() {
    switch (props.boxType) {
      case "History Battle":
        return renderHistoryBattleBoxes();

      case "Current Battle":
        return renderCurrentBattleBoxes();
      
      case "Challenge":
        return renderChallenges();

      case "Friend":
        return renderFriendBoxes();

      case "Day":
        return renderDayBoxes();

      case "Swatch":
        return renderSwatchBoxes();

      default:
        if (props.boxes) {
          return renderNoneBoxes();
        } else {
          return "No props passed";
        }
    }
  }

  return <nav className="menu-container">{renderBoxes()}</nav>;
}
