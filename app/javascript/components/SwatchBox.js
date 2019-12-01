import React from "react";
import UIfx from "uifx";
import tickAudio from "../../assets/sounds/tone1.wav";

export default function SwatchBox(props) {
  const tone = new UIfx(tickAudio, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  });
  const lock = props.level < props.requirement;

  return (
    <button
      className={props.current ? "currentButton" : "button"}
      onMouseDown={() => {
        if(!props.current && !lock){
          tone.play();
        }
      }}
      onClick={lock || props.onClick}
    >
      <a>
        {lock ? "lock" : props.image}
      </a>
    </button>
  );
}