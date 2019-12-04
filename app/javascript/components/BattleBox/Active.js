import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Active(props) {
  return (
    <div className="battle-box-content">
      <Icon color={props.color1}/>
      <a className='bbox-username'>{props.username1}</a>
      <div className="battle-box-center-spot">
        <img className='versus' src={versus}></img>
        <a className="battle-box-center-spot-text">Days Left</a>
      </div>
      <a className='bbox-username'>{props.username2}</a>
      <Icon color={props.color2} mirror={true}/>
    </div>
  );
}
