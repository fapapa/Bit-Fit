import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Past(props) {
  return (
    <div className={props.winner ? "battle-box-content-winner" : "battle-box-content-loser"}>
      <Icon color={props.color1}/>
      <a className='bbox-username'>{props.username1}</a>
      <div className="battle-box-center-spot">
        <img className='versus' src={versus}></img>
      </div>
      <a className='bbox-username'>{props.username2}</a> 
      <Icon color={props.color2} mirror={true}/>
    </div>
  );
}
