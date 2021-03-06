import React, { useState } from "react";
import Searching from "./Searching";
import Found from "./Found";
import Rules from "./Rules";

export default function FindaFoe(props) {
  const RULES = "RULES";
  const SEARCH = "SEARCH";
  const FOUND = "FOUND";
  const [mode, setMode] = useState(RULES);
  const [battle, setBattle] = useState({});

  const foeFind = function() {
    setMode(SEARCH);
    props.onChallenge().then(res => {
      setBattle(res.data);
      setMode(FOUND);
    });
  };

  return (
    <div className="findafoe-container">
      {mode === RULES && (
        <div className="findafoe-content">
          <Rules onClick={() => foeFind()} />
        </div>
      )}
      {mode === SEARCH && (
        <div className="findafoe-content">
          <Searching />
        </div>
      )}
      {mode === FOUND && (
        <div className="findafoe-content">
          <Found username={battle.opponent.username} />
        </div>
      )}
    </div>
  );
}
