import React, { useState } from "react";
import Searching from "./Searching";
import Found from "./Found";
import Rules from "./Rules";

export default function FindaFoe(props) {
  const RULES = "RULES";
  const SEARCH = "SEARCH";
  const FOUND = "FOUND";
  const [mode, setMode] = useState(RULES);

  const foeFind = function(days) {
    console.log(days);
    console.log("put the method here");
    setMode(SEARCH);
    setTimeout(()=>{setMode(FOUND)},1000);
    setTimeout(()=>{setMode(RULES)},5000); //could open to current battles to see pending

  }


  return (
    <div className="findafoe-container">
      {mode === RULES && (
        <div className="findafoe-content">
          <Rules 
            onClick={(days) => foeFind(days)}
          />
        </div>
      )}
      {mode === SEARCH && (
        <div className="findafoe-content">
          <Searching />
        </div>
      )}
      {mode === FOUND && (
        <div className="findafoe-content">
          <Found 
            username={"opponent"}
          />
        </div>
      )}
    </div>
  );
}
