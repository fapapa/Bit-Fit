import React, {useState, useEffect } from "react";


export default function ExpFiller(props) {
  const lastPercentage = ((props.last_exp%500) / props.goal) * 100;
  const percentage = ((props.current_exp%500) / props.goal) * 100;
  const levelsToGo = Math.floor(props.current_exp/500) - Math.floor(props.last_exp/props.goal);
  const [transition, setTransition] = useState("slow");
  const [width, setWidth] = useState(lastPercentage);

  const loadBar = (levels) => {
    if(levels > 0) {
      setWidth(100);
      setTimeout(() => {setTransition("fast"); setWidth(0); props.onChange()}, 2000);
      levels -= 1;
      setTimeout((levels) => {setTransition("slow"); loadBar(levels)}, 2100, levels)
    } else if(levels <= 0 && Math.ceil(percentage) != 100){
      setWidth(percentage);
    } else {
      setWidth(0);
    }
  }
  console.log(levelsToGo)
  useEffect(() => {
    setTimeout((levelsToGo) => {loadBar(levelsToGo)}, 500, levelsToGo)
  }, []);
  

  return (
    <div className={"exp-filler"}>
      <div
          className={"exp-filler-increment"}
          style={{
            width: `${width}%`,
            background: "blue",
            transitionDuration: `${transition === 'fast' ? 0 : 2}s`
          }}
      />
    </div>
    )
}