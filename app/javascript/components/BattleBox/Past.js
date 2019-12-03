import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Past(props) {
  return (
    <div className="battle-box-content">
      <Icon color={45} user={1}/>
      <a className='username'>{props.username1}</a>
      <div className="battle-box-center-spot">
        <img className='versus' src={versus}></img>
        <a className="battle-box-center-spot-text">Date</a>
      </div>
      <a className='username'>{props.username2}</a>
      <Icon color={90} user={2}/>
    </div>
  );
}
