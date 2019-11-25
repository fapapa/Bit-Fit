import React from "react"
import classNames from 'classnames';
import UIfx from 'uifx'; 
import tickAudio from "../../assets/sounds/tone1.wav";


export default function AwesomeButton(props) {
  
  let buttonClass = classNames({
    'button': true,
    'button--confirm': props.confirm,
    'button--danger': props.danger
  });
  const tone = new UIfx (tickAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
  );

  return (
    <button
    className={buttonClass}
    onMouseDown={() => {
          tone.play();
        }}
    >
      {props.title}
    </button>
  );
}