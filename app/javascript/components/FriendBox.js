import React, { useState } from "react";
import Icon from "./Icon";

export default function FriendBox(props) {
  return (
    <div className="friendbox-container">
    <div className="friendbox-content">
      <div className="friend-info">
      <Icon color={props.color} user={1}/>
      <a className='bbox-username'>{props.username}</a>
      </div>
      {props.status === 'free' && (
        <button className="challenge-button">CHALLENGE</button>
      )}
      {props.status === 'pending' && (
        <button className="pending-button">CHALLENGE PENDING</button>
      )}
      {props.status === 'busy' && (
        <button className="busy-button"> CURRENTLY BATTLING</button>
      )}
      </div>
      </div>
  );
}