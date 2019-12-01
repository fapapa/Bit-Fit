import React, { useState } from "react";
import NavMenu from "../NavMenu";
import AwesomeButton from "../AwesomeButton";
import MenuContainer from "../MenuContainer";
import Fitogachi from "../Fitogachi";

export default function TheGym(props) {
  const [currentSwatch, setCurrentSwatch] = useState(
    props.color ? props.color / 45 + 1 : 1
  );
  const [currentColor, setCurrentColor] = useState(props.color || 0);
  const [savedColor, setSavedColor] = useState(props.color || 0);
  const boxes = [
    {
      image: 1,
      requirement: 1,
      onClick: () => {
        setCurrentColor(0);
        setCurrentSwatch(1);
      },
    },
    {
      image: 2,
      requirement: 2,
      onClick: () => {
        setCurrentColor(45);
        setCurrentSwatch(2);
      },
    },
    {
      image: 3,
      requirement: 3,
      onClick: () => {
        setCurrentColor(90);
        setCurrentSwatch(3);
      },
    },
    {
      image: 4,
      requirement: 4,
      onClick: () => {
        setCurrentColor(145);
        setCurrentSwatch(4);
      },
    },
    {
      image: 5,
      requirement: 5,
      onClick: () => {
        setCurrentColor(180);
        setCurrentSwatch(5);
      },
    },
    {
      image: 6,
      requirement: 6,
      onClick: () => {
        setCurrentColor(225);
        setCurrentSwatch(6);
      },
    },
    {
      image: 7,
      requirement: 7,
      onClick: () => {
        setCurrentColor(270);
        setCurrentSwatch(7);
      },
    },
    {
      image: 8,
      requirement: 8,
      onClick: () => {
        setCurrentColor(315);
        setCurrentSwatch(8);
      },
    },
  ];

  return (
    <main className="page">
      <section className="gym-menu-container">
        <div className="username">{props.username}</div>
        <AwesomeButton
          title={currentColor === savedColor ? "Home" : "Save/Home"}
          onClick={props.onHome}
        />
        <div className="swatch-container">
          <MenuContainer
            boxType={"Swatch"}
            boxes={boxes}
            level={5}
            current={currentSwatch}
          />
        </div>
      </section>
      <section className="gym-container">
        <section className="gym-wizard-text">
          <a>Gym Wizard</a>
        </section>
        <section className="gym-space">
          <div className="gym-fitogachi">
            <Fitogachi
              level={6}
              state={"idle"}
              color={currentColor}
              mirror={true}
              simulation={false}
            />
          </div>
        </section>
      </section>
    </main>
  );
}
