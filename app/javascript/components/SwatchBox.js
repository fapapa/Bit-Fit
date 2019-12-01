import React from "react";
import UIfx from "uifx";
import tickAudio from "../../assets/sounds/tone1.wav";

export default function SwatchBox(props) {
  const tone = new UIfx(tickAudio, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  });
  const lock = props.level < props.requirement;

  const styleCurrent = {
    backgroundColor: "#ffe11d",
  };
  const styleNormal = {
    backgroundColor: "transparent",
  };

  return (
    <button
      className={props.current ? "currentSwatch" : "swatch"}
      onMouseDown={() => {
        if (!props.current && !lock) {
          tone.play();
        }
      }}
      onClick={lock ? null : props.onClick}
    >
      {lock && (
        <div>
          <img className="lock-image" src="/images/lock5.png"></img>
          <div className="requirement-text">{props.requirement}</div>
        </div>
      )}
      {!lock && (
        <img
          className="swatch-image"
          src="/images/swatch3.png"
          style={{ filter: `hue-rotate(${(props.requirement - 1) * 45}deg)` }}
        ></img>
      )}
    </button>
  );
}
