import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import MenuContainer from "../MenuContainer";
import BattleSim from "../BattleSim";
import FindaFoe from "../FindaFoe.js";

export default function Battle(props) {
  const CURRENTBATTLES = "CURRENTBATTLES";
  const FOEFIND = "FOEFIND";
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
        setButtonMode(FOEFIND);
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

  function showAnimation(id) {
    setBattleSimId(id);
    setScreenMode(BATTLESIM);
  }

  function onSimulationEnd() {
    setBattleSimData(null);
    setScreenMode(MENU);
  }

  const [battle, setBattle] = useState([]);
  const [current, setCurrent] = useState([]);
  const [history, setHistory] = useState([]);
  const [challenges, setChallenges] = useState([]);

  function createBattle() {
    Axios.post("/api/battles", {})
      .then(res => {
        setBattle(res.data);
        setButtonMode(FOEFINDFOUND);
        console.log(battle);
      })
      .catch(err => console.error("Error:", err));
  }

  function acceptBattle(battleId) {
    Axios.post("/api/battles/${battleId}", {})
      .then(res => console.log(res.data))
      .catch(err => console.error("Error:", err));
  }

  useEffect(() => {
    Promise.resolve(Axios.get("/api/battles"))
      .then(res => {
        setCurrent(JSON.parse(res.data.current));
        setHistory(JSON.parse(res.data.history));
        setChallenges(JSON.parse(res.data.challenges));
      })
      .catch(err => console.error("Error:", err));
  }, []);

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
                      boxType={"Current Battle"}
                      boxes={current}
                      userid={props.userid}
                    />
                  </div>
                </section>
              )}
              {buttonMode === FOEFIND && (
                <section className="battle-content-container">
                  <FindaFoe />
                </section>
              )}
              {buttonMode === FRIENDS && (
                <section className="battle-content-container">
                  <div className="battle-menu-container">
                    <MenuContainer
                      boxType={"Friend"}
                      boxes={[
                        { username: "John", status: "free", color: 90 },
                        { username: "Fabio", status: "busy", color: 225 },
                        { username: "Jackson", status: "pending", color: 315 },
                      ]}
                    />
                  </div>
                </section>
              )}
              {buttonMode === FISTORY && (
                <section className="battle-content-container">
                  <div className="battle-menu-container">
                    <MenuContainer
                      boxType={"History Battle"}
                      boxes={history}
                      userid={props.userid}
                      showAnimation={(id) => showAnimation(id)}
                    />
                  </div>
                </section>
              )}
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
