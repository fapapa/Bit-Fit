import React, { useState, useEffect } from 'react';


export default function Filler(props) {
const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setPercentage((props.current_points / props.daily_goal) * 100)
  }, []);

  return (<div className='filler' style={{ width: `${percentage}%` }} />)
}
