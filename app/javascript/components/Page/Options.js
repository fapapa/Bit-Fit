import React from "react";
import NavMenu from "../NavMenu";

export default function Options(props) {
  const buttons = [
    {
      title: "Home",
      onClick: props.onHome,
    },
    {
      title: "",
      onClick: () => {
        console.log("Fitness");
      },
    },
  ];

  return (
    <main className="page">
      <section className="nav-menu-container">
        <NavMenu buttons={buttons} username={props.username} />
      </section>
      <section className="content-container">
        <section className="fitigochi-container">
          <a>Options</a>
        </section>
      </section>
    </main>
  );
}
