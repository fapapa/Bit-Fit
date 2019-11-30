import React, { useState, useEffect } from "react";
import AwesomeButton from "./AwesomeButton";

export default function NavMenu(props) {
  const buttons = props.buttons.map((button, index) => {
    return (
      <AwesomeButton
        key={index}
        current={button.title === props.currentButton}
        title={button.title}
        notifications={button.notifications}
        onClick={button.onClick || null}
      />
    );
  });

  return (
    <section className="navmenu">
      <div className="username">{props.username}</div>
      {buttons}
    </section>
  );
}
