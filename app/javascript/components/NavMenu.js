import React from "react";
import AwesomeButton from "./AwesomeButton";

export default function Application(props) {
  const buttons = props.buttons.map((button, index) => {
    return (
      <AwesomeButton
        key={index}
        title={button.title}
        onClick={button.onClick || null}
      />
    );
  });

  return (
    <section className="navmenu">
      <div className="username">Fabio</div>
      {buttons}
    </section>
  );
}
