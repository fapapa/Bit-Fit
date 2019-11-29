import React from "react";
import NavMenu from "../NavMenu";
import useVisualMode from "hooks/useVisualMode";
import MenuContainer from "../MenuContainer";
import BattleSim from "../BattleSim";

export default function Battle(props) {

  const CURRENTBATTLES = "CURRENTBATTLES";
  const FOEFINDRULES = "FOEFINDRULES";
  const FORFINDWAIT = "FORFINDWAIT";
  const FOEFINDFOUND = "FOEFINDFOUND";
  const FRIENDS = "FRIENDS";
  const FISTORY = "FISTORY";
  const BATTLESIM = "BATTLESIM";

  const { mode, transition, back } = useVisualMode(
    CURRENTBATTLES
  );

  const buttons = [
    {
      title: "Home",
      onClick: props.onHome,
    },
    {
      title: "Current Battles",
      onClick: () => {
        transition(CURRENTBATTLES);
      }
    },
    {
      title: "Find a Foe",
      onClick: () => {
        transition(FOEFINDRULES);
      }
    },
    {
      title: "Fight a Friend",
      onClick: () => {
        transition(FRIENDS);
      }
    },
    {
      title: "Fistory",
      onClick: () => {
        transition(FISTORY);
      }
    },
    {
      title: "BattleTest",
      onClick: () => {
        transition(BATTLESIM);
      }
    },
  ];

  return (
    <main className="page-container">
      {mode === CURRENTBATTLES && (
        <div className="page">
        <section className="nav-menu-container">
          <NavMenu buttons={buttons} />
        </section>
        <section className="content-container">
          <section className="battle-content-container">
            <div className="battle-menu-container">
            <MenuContainer
            boxType={'Battle'}
            boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            </div>
          </section>
          <section className="battle-fitigochi-container">
            <a>Battle</a>
          </section>
        </section>
        </div>
      )}
      {mode === FOEFINDRULES && (
       <div className="page">
       <section className="nav-menu-container">
         <NavMenu buttons={buttons} />
       </section>
       <section className="content-container">
         <section className="battle-content-container">
           <div className="battle-menu-container">
           <MenuContainer
           boxType={'Battle'}
           boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
           />
           </div>
         </section>
         <section className="battle-fitigochi-container">
           <a>Battle</a>
         </section>
       </section>
       </div>
      )}
      {mode === FORFINDWAIT && (
        <div className="page">
        <section className="nav-menu-container">
          <NavMenu buttons={buttons} />
        </section>
        <section className="content-container">
          <section className="battle-content-container">
            <div className="battle-menu-container">
            <MenuContainer
            boxType={'Battle'}
            boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            </div>
          </section>
          <section className="battle-fitigochi-container">
            <a>Battle</a>
          </section>
        </section>
        </div>
      )}
      {mode === FOEFINDFOUND && (
        <div className="page">
        <section className="nav-menu-container">
          <NavMenu buttons={buttons} />
        </section>
        <section className="content-container">
          <section className="battle-content-container">
            <div className="battle-menu-container">
            <MenuContainer
            boxType={'Battle'}
            boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            </div>
          </section>
          <section className="battle-fitigochi-container">
            <a>Battle</a>
          </section>
        </section>
        </div>
      )}
      {mode === FRIENDS && (
        <div className="page">
        <section className="nav-menu-container">
          <NavMenu buttons={buttons} />
        </section>
        <section className="content-container">
          <section className="battle-content-container">
            <div className="battle-menu-container">
            <MenuContainer
            boxType={'Battle'}
            boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            </div>
          </section>
          <section className="battle-fitigochi-container">
            <a>Battle</a>
          </section>
        </section>
        </div>
      )}
      {mode === FISTORY && (
        <div className="page">
        <section className="nav-menu-container">
          <NavMenu buttons={buttons} />
        </section>
        <section className="content-container">
          <section className="battle-content-container">
            <div className="battle-menu-container">
            <MenuContainer
            boxType={'Battle'}
            boxes={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            </div>
          </section>
          <section className="battle-fitigochi-container">
            <a>Battle</a>
          </section>
        </section>
        </div>
      )}
      {mode === BATTLESIM && (
        <BattleSim />
      )}
    </main>
  );
}
