import React from "react";

export default function Found(props) {
  return (
  <div className="found-container">
    <div className="found-content">{`Challenged ${props.username}!`}</div>
  </div>
  );
}
