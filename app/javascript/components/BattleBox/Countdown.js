import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function CountDown(props) {
  return (
    <div className="battle-box-content">
      <Icon color={0}/>
      <a className='username'>{props.username1}</a>
      <div className="battle-box-center-spot">
        <a className="battle-box-center-spot-text-solo">Starts at midnight</a>
      </div>
      <a className='username'>{props.username2}</a>
      <Icon color={45} mirror={true}/>
    </div>
  );
}
