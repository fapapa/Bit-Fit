import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Pending(props) {
  return (
    <div className="battle-box-content">
      <Icon color={'blue'} user={1}/>
      <a className='username'>{props.username1}</a>
      <div className="battle-box-center-spot">
        <a className="battle-box-center-spot-text-solo">Confirmation Pending</a>
      </div>
      <a className='username'>{props.username2}</a>
      <Icon color={'blue'} user={2}/>
    </div>
  );
}