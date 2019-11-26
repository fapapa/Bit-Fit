import React from "react"
import NavMenu from "./NavMenu"
import Graph from "./Graph"

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
    <div>
      <NavMenu buttons={homeButtons} />
      <Graph />
    </div>
  );
}