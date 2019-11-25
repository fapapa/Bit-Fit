import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProgressBar(props) {
  const [percentage, setPercentage] = useState(0)
  
  
  
  const Filler = (props) => {
    const user = {
      calories_burned: 900,
      daily_goal: 3000
    }
    const current_progress = setPercentage((user.calories_burned / user.daily_goal) * 100)
    return <div className="filler" style={{ width: `${percentage}%` }} />
  }
  return ( 
    <div className="progress-bar">
      <Filler />
    </div>
  )
}
