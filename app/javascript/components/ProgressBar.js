import React, { useState } from 'react'


export default function ProgressBar(props) {
  const [percentage, setPercentage] = useState(60)

  const Filler = (props) => {
    return <div className="filler" style={{ width: `${percentage}%` }} />
  }
  return ( 
    <div className="progress-bar">
      <Filler />
    </div>
  )
}
