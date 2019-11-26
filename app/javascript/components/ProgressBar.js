import React from 'react';
import Filler from './Filler';

export default function ProgressBar(props) {
  return ( 
    <div className="progress-bar">
      <Filler 
        current_points={props.current_points}
        daily_goal={props.daily_goal}
      />
    </div>
  )
}
