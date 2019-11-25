import React from "react"
import UIfx from 'uifx'; 
import tickAudio from "../../assets/sounds/tone1.wav";


export default function AwesomeButton(props) {
  
  const tone = new UIfx (tickAudio,  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
  );

  return (
    <button
    className={'button'}
    onMouseDown={() => {
          tone.play();
        }}
    onClick={props.onClick}
    ><a className={'buttonText'}>
      {props.title}
    </a>
    </button>
  );
}