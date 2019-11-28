import React, {useEffect, useState} from 'react';
import Filler from './Filler';




export default function ProgressBar(props) {
  // const [points, setPoints] = useState(90)
  // const [goal, setGoal] = useState(100)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPoints(50)
  //     setTimeout(() => {
  //       setPoints(95)
  //     }, 3000)
  //   }, 4000);

  // }, [])

  return ( 
    <div className="progress-bar">
      <Filler 
        current_points={props.current_points}
        daily_goal={props.daily_goal}
      />
      <div className="steps">
        <div className="done"></div>
        <div className="current"></div>
        <div className="goal"></div>
      </div>
    </div>
  )
}

