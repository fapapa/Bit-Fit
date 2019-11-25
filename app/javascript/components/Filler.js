import React, { useState, useEffect} from 'react';

export default function Filler(props) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {

    setPercentage((user.calories_burned / user.daily_goal) * 100)
  })
  const user = {
    calories_burned: 1800,
    daily_goal: 3000
  }


  return (<div className="filler" style={{ width: `${percentage}%` }} />)
}