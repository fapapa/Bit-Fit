import React, { useState, useEffect } from "react";
import ExpFiller from "./ExpFiller"



export default function ExpBar(props) {

  
  return (
    <div className="exp-bar">
      <ExpFiller 
        current_exp={props.current_exp}
        last_exp={props.last_experience}
        goal={props.goal}
        onChange={props.onChange}
        onExpSet={props.onExpSet}
        />
    </div>
  );
}