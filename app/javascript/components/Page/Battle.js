import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavMenu from "../NavMenu";
import MenuContainer from "../MenuContainer";
import BattleSim from "../BattleSim";
import FindaFoe from "../FindaFoe.js";

export default function Battle(props) {
  const CURRENTBATTLES = "CURRENTBATTLES";
  const FOEFIND = "FOEFIND";
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
  ];

  function showAnimation(id) {
    setBattleSimId(id);
    setScreenMode(BATTLESIM);
    updateHistory();
  }

  function onSimulationEnd() {
    setBattleSimId(null);
    setScreenMode(MENU);
  }

  const [battle, setBattle] = useState([]);
  const [current, setCurrent] = useState([]);
  const [history, setHistory] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [friends, setFriends] = useState([]);

  function createFoeBattle() {
    setTimeout(() => updateCurrent(), 1000);
    return Axios.post("/api/battles", {});
  }

  function createFriendBattle(friendId) {
    Axios.post("/api/battles", { battle: { opponent_id: friendId } })
      .then(res => {
        updateCurrent();
        setButtonMode(CURRENTBATTLES);
        setCurrentButton("Current Battles");
      })
      .catch(err => console.error("Error", err));
  }

  function acceptBattle(battleId) {
    Axios.post(`/api/battles/${battleId}`, {})
      .then(() => updateCurrent())
      .catch(err => console.error("Error:", err));
  }

  function updateHistory() {
    Axios.get("/api/battles/history")
    .then(res => setHistory(res.data))
    .catch(err => console.error("Error:", err));

  }

  function updateCurrent() {
    Axios.get("/api/battles/current")
    .then(res => setCurrent(res.data))
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

    Promise.resolve(Axios.get("/api/friends"))
      .then(res => setFriends(res.data))
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
                      onAccept={(id) => acceptBattle(id)}
                    />
                  </div>
                </section>
              )}
              {buttonMode === FOEFIND && (
                <section className="battle-content-container">
                  <FindaFoe onChallenge={() => createFoeBattle()} />
                </section>
              )}
              {buttonMode === FRIENDS && (
                <section className="battle-content-container">
                  <div className="battle-menu-container">
                    <MenuContainer
                      boxType={"Friend"}
                      boxes={friends}
                      onChallenge={friendId => createFriendBattle(friendId)}
                      userid={props.userid}
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
                      showAnimation={id => showAnimation(id)}
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
