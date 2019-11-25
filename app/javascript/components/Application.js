import React from "react"
import NavMenu from "./NavMenu"

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