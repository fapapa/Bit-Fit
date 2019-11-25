import React from "react"
import AwesomeButton from "./AwesomeButton";

export default function Application(props) {

  const buttons = props.buttons.map(button => {
    return (
      <AwesomeButton 
        title={button.title}
        onClick={button.onClick || null}
      />
    )
  });


  return (
    <section className="navmenu">
      {buttons}
    </section>
  );
}