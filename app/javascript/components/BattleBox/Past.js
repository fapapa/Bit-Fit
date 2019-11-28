import React from "react";
import Icon from "../Icon"
import versus from '../../../assets/images/versus.png'

export default function Past(props) {
  return (
    <div className="battle-box-content">
      <Icon color={blue} user={1}/>
      <a className='username'>{props.username1}</a>
      <img src={versus}></img>
      <a className='username'>{props.username2}</a>
      <Icon color={blue} user={2}/>
    </div>
  );
}
