import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Waiting(props) {
  return (
    <div className="battle-box-content">
      <div className='waiting-box'>
        <a className='waiting-message'>WAITING FOR OPPONENT</a>
      </div>
    </div>
  );
}
