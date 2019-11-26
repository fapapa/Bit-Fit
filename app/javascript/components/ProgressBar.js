import React from 'react';
import Filler from './Filler';
import classNames from 'classnames';

export default function ProgressBar(props) {
  console.log(props)
  let progressBarClass = classNames('progress-bar', {
    "progress-bar--calories": props.current_points,
    "progress-bar--steps": props.current_points,
    "progress-bar--health": props.current_health,
    "progress-bar--experience": props.current_experience
  });

  return ( 
    <div className={progressBarClass}>
      <Filler 
        current_points={props.current_points}
        daily_goal={props.daily_goal}
      />
    </div>
  )
}
