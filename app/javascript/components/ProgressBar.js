import React from 'react';
import Filler from './Filler';
import classNames from 'classnames';

export default function ProgressBar(props) {

  let progressBarClass = classNames('progress-bar', {
    "progress-bar--calories": props.calories,
    "progress-bar--steps": props.steps,
    "progress-bar--health": props.health,
    "progress-bar--experience": props.experience
  });

  return ( 
    <div className={progressBarClass}>
      <Filler 
        calories={props.calories}
        steps={props.steps}
        health={props.health}
        experience={props.experience}
      />
    </div>
  )
}
