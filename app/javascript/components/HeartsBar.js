import React, { useState, useEffect } from "react";
import Rating from '@material-ui/lab/Rating';
import HeartIcon from './HeartIcon';



export default function HeartsBar(props) {

  useEffect (() => {
    setCurrentEnergy(props.energy)
  })

  const [currentEnergy, setCurrentEnergy] = useState(props.energy)
  
  return (
    <section className="heartsBar">
      <Rating
      value={currentEnergy}
      max={5}
      icon={<HeartIcon viewBox="0 0 240 240" />}
      readOnly={true}
      precision={0.5}
      />
    </section>
  );
}

