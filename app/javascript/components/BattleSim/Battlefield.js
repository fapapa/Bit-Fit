import React, { useState, useEffect } from "react";
import Fitogachi from "../Fitogachi"
import HealthBar from "./HealthBar"

export default function Battlefield(props) {
  const ATTACK1 = ["attack", "hurt"];
  const ATTACK2 = ["hurt", "attack"];
  const IDLE = ["idle", "idle"];
  const LOSS1 = ["loss", "idle"];
  const LOSS2 = ["idle", "loss"];

  const [gif, setGif] = useState(IDLE);
  const [days, setDays] = useState(props.days);
  const [healthOne, setHealthOne] = useState(100);
  const [healthTwo, setHealthTwo] = useState(100);

  function playDays() {
    if(days.length === 0){
      playDead();
    } else {
      const day = days.pop();
      console.log(day);
      console.log(props.winner[0])
      if(props.winner[0] === 1){
        setTimeout((day) => {attack2(day)}, 1000, day);
      } else {
        setTimeout((day) => {attack1(day)}, 2000, day);
      }
      setDays(prev => prev.slice(0, prev.length - 1));
    }
  }

  function attack1(day) {
    setGif(ATTACK1);
    setTimeout(() => setGif(IDLE), 1000);
    setTimeout((day) => {healthChange1(day)}, 1000, day);
  }

  function healthChange1(day) {
    setHealthTwo(prev => prev-day[0])
    if(props.winner[0] === 1){
      setTimeout(() => {playDays()}, 1000);
    } else {
      setTimeout((day) => {attack2(day)}, 2000, day);
    }
  }

  function attack2(day) {
    setGif(ATTACK2);
    setTimeout(() => setGif(IDLE), 1000);
    setTimeout((day) => {healthChange2(day)}, 1000, day);
  }

  function healthChange2(day) {
    setHealthOne(prev => prev - day[1])
    if(props.winner[0] === 1){
      setTimeout((day) => {attack1(day)}, 2000, day);
    }else{
      setTimeout(() => {playDays()}, 1000);
    }
  }

  function playDead() {
    setGif(props.winner[0] === 1 ? LOSS2 : LOSS1);
    setTimeout((props) => props.onSimulationEnd(), 2000, props);
  }

  useEffect(() => {
    setTimeout(() => playDays(), 2000);
  }, [])


  return (
    <div className="battlefield-background">
      <div className="battlefield-status">
        <HealthBar 
          percentage={`${healthOne}%`}
          mirror={true}
          username={props.users[0][0]}
        />
        <div className="KO-icon-outer">
          <div className="KO-icon-inner">
            <a className="KO-text">K.O</a>
          </div>
        </div>
        <HealthBar 
          percentage={`${healthTwo}%`}
          mirror={false}
          username={props.users[1][0]}
          />
      </div>
      <div className="battlefield-container">
        <div className="character-container">
          <Fitogachi 
           state={gif[0]}
           mirror={false}
           color={props.users[0][2]}
           level={props.users[0][1]}
           simulation={false}
          />
        </div>
        <div className="character-container">
          <Fitogachi
            state={gif[1]}
            mirror={true}
            color={props.users[1][2]}
            level={props.users[1][1]}
            simulation={false}
          />
        </div>
      </div>
    </div>
  );
}
