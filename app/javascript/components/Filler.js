import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
export default function Filler(props) {

const [percentage, setPercentage] = useState(0)

  const steps = props.steps;
  const calories = props.calories;
  
  let fillerClass = classNames('filler', {
    "filler--calories":props.calories,
    "filler--steps": props.steps,
    "filler--health": props.health,
    "filler--experience": props.experience
  });

  useEffect(() => {
    setPercentage((calories / user.daily_goal) * 100)
  }, [])

  const user = {
    daily_goal: 3000 //props.goal
  }


  return (<div className={fillerClass} style={{ width: `${percentage}%` }} />)
}
