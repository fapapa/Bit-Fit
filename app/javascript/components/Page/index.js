import React from "react";
import Home from "./Home"
import Battle from "./Battle"
import Fitness from "./Fitness"
import TheGym from "./TheGym"
import Friends from "./Friends"
import Options from "./Options"
import useVisualMode from "hooks/useVisualMode";

export default function HomePage(props) {
  // DIFFERENT MODES FOR MODE SELECTOR
  const HOME = "HOME";
  const BATTLE = "BATTLE";
  const FITNESS = "FITNESS";
  const THEGYM = "THEGYM";
  const FRIENDS = "FRIENDS";
  const OPTIONS = "OPTIONS";
  
  // SELECTOR HOOK
  const { mode, transition, back } = useVisualMode(
    HOME
  );


  const buttons = [
    {
      title: "Battle",
      onClick: () => {
        console.log("Battle");
      }
    },
    {
      title: "Fitness",
      onClick: () => {
        console.log("Fitness");
      }
    },
    {
      title: "The Gym",
      onClick: () => {
        console.log("The Gym");
      }
    },
    {
      title: "Friends",
      onClick: () => {
        console.log("Friends");
      }
    },
    {
      title: "Options",
      onClick: () => {
        console.log("Options");
      }
    }
  ];

  return (
    <div className='page-container'>
      {mode === HOME && (
        <Home 
          onBattle={() => transition(BATTLE)}
          onFitness={() => transition(FITNESS)}
          onTheGym={() => transition(THEGYM)}
          onFriends={() => transition(FRIENDS)}
          onOptions={() => transition(OPTIONS)}
        />
      )}
      {mode === BATTLE && (
        <Battle 
          onHome={() => back()}  
        />
      )}
      {mode === FITNESS && (
        <Fitness 
          onHome={() => back()}
        />
      )}
      {mode === THEGYM && (
        <TheGym 
          onHome={() => back()}
        />
      )}
      {mode === FRIENDS && (
        <Friends 
          onHome={() => back()}
        />
      )}
      {mode === OPTIONS && (
        <Options 
          onHome={() => back()}
        />
      )}
    </div>
  );
}