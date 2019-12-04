import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Complete(props) {
  return (
    <div className="battle-box-content" onClick={props.onClick}>
      <div className='complete-box'>
        <a className='complete-message'>COMPLETE</a>
      </div>
    </div>
  );
}
