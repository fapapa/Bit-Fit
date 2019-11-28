import React from "react"
import NavMenu from "./NavMenu"
import ProgressBar from "./ProgressBar";

export default function Application(props) {

  const homeButtons = [
    {
      title: 'Battle'
    },
    {
      title: 'Fitness'
    }
  ];

  return (
    <NavMenu buttons={homeButtons} />
  );
}

