import React from "react";
import Icon from "../Icon";

export default function Challenge(props) {
  return (
    <div className="friendbox-container">
      <div className="challenge-content">
        <div className="challenge-buttons">
          <button
            className="accept-button"
            onClick={props.onAccept}
          >
            Accept
          </button>
          <button
            className="deny-button"
            //onClick={() => props.onAccept}
          >
            Deny
          </button>
          </div>
        <div className="challenger-info">
          <a className="bbox-username">{props.username}</a>
          <Icon color={props.color} mirror={true} />
        </div>
      </div>
    </div>
  );
}
