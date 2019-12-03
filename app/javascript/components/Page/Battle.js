import React, { useState } from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import MenuContainer from "../MenuContainer";
import BattleSim from "../BattleSim";
import Button from "../AwesomeButton";

export default function Battle(props) {
  const CURRENTBATTLES = "CURRENTBATTLES";
  const FOEFINDRULES = "FOEFINDRULES";
  const FOEFINDWAIT = "FORFINDWAIT";
  const FOEFINDFOUND = "FOEFINDFOUND";
  const FRIENDS = "FRIENDS";
  const FISTORY = "FISTORY";
  const MENU = "MENU";
  const BATTLESIM = "BATTLESIM";

  const [buttonMode, setButtonMode] = useState(CURRENTBATTLES);
  const [screenMode, setScreenMode] = useState(MENU);
  const [currentButton, setCurrentButton] = useState("Current Battles");
  const [battleSimId, setBattleSimId] = useState(0);

  const buttons = [
    {
      title: "Home",
      onClick: props.onHome,
    },
    {
      title: "Current Battles",
      onClick: () => {
        setButtonMode(CURRENTBATTLES);
        setCurrentButton("Current Battles");
      },
    },
    {
      title: "Find a Foe",
      onClick: () => {
        setButtonMode(FOEFINDRULES);
        setCurrentButton("Find a Foe");
      },
    },
    {
      title: "Fight a Friend",
      onClick: () => {
        setButtonMode(FRIENDS);
        setCurrentButton("Fight a Friend");
      },
    },
    {
      title: "Fistory",
      onClick: () => {
        setButtonMode(FISTORY);
        setCurrentButton("Fistory");
      },
    },
    {
      title: "BattleTest",
      onClick: () => {
        setScreenMode(BATTLESIM);
      },
    },
  ];

  function onSimulationEnd() {
    setBattleSimId(null);
    setScreenMode(MENU);
  }

  const [battle, setBattle] = useState([]);

  function createBattle() {
    Axios.post("/api/battles", {})
      .then(res => {
        setBattle(res.data);
        setButtonMode(FOEFINDFOUND);
        console.log(battle);
      })
      .catch(err => console.error("Error:", err));
  }

  return (
    <main className="page-container">
      {screenMode === MENU && (
        <div className="battle-menu-background">
        <div className="parallax-city-3"></div>
        <div className="parallax-city-2"></div>
        <div className="parallax-city-1"></div>
        <div className="page">
          <section className="nav-menu-container">
            <NavMenu
              buttons={buttons}
              username={props.username}
              currentButton={currentButton}
            />
          </section>
          <section className="content-container">
            {buttonMode === CURRENTBATTLES && (
              <section className="battle-content-container">
                <div className="battle-menu-container">
                  <MenuContainer
                    onAccept={() => onAccept(id)}
                    onComplete={() => onComplete(id)}
                    boxType={"Battle"}
                    boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                  />
                </div>
              </section>
            )}
            {buttonMode === FOEFINDRULES && (
              <section className="battle-content-container">
                <div className="battle-menu-container">
                  When you press the below button, you will immediately issue a
                  battle challenge to a random person. Once they accept, the
                  challenge will start at midnight.
                  <Button onClick={createBattle} title="Go" />
                </div>
              </section>
            )}
            {buttonMode === FOEFINDWAIT && (
              <section className="battle-content-container">
                <div className="battle-menu-container">
                  NEEDS a simple animation component.. actually you we might be
                  able to just copy guts of BattleSim/Loading
                </div>
              </section>
            )}
            {buttonMode === FOEFINDFOUND && (
              <section className="battle-content-container">
                <div className="battle-menu-container">
                  You have issued a challenge to {battle.opponent.username}.
                  Check the Current Battles page to see when they accept your
                  challenge. Your challenge will begin at midnight after the
                  challenge is accepted.
                </div>
              </section>
            )}
            {buttonMode === FRIENDS && (
              <section className="battle-content-container">
                <div className="battle-menu-container">
                <MenuContainer
                boxType={'Friend'}
                boxes={[{username: "John", status: "free", color: 90}, {username: "Fabio", status: "busy", color: 225}, {username: "Jackson", status: "pending", color: 315}]}
                />
                </div>
              </section>
            )}
            {buttonMode === FISTORY && (
              <section className="battle-content-container">
                <div className="battle-menu-container">
                  <MenuContainer
                    boxType={"Battle"}
                    boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                  />
                  needs a data endpoint for only past battles
                </div>
              </section>
            )}
            <section className="battle-fitigochi-container">
              <a>Fitogachi</a>
            </section>
          </section>
        </div>
        </div>
        )}
      {screenMode === BATTLESIM && (
        <BattleSim battleId={battleSimId} onSimulationEnd={onSimulationEnd} />
      )}
    </main>
  );
}
