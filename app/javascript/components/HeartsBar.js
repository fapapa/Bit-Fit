import React, { useState, useEffect } from "react";
import Rating from '@material-ui/lab/Rating';
import HeartIcon from './HeartIcon';



export default function HeartsBar(props) {
  const [energy, setEnergy] = useState(props.energy)
  
  useEffect(() => {
    setEnergy(2.5)
  }, []);

  return (
    <section className="heartsBar">
      <Rating
      value={energy}
      max={5}
      icon={<HeartIcon viewBox="0 0 240 240" />}
      readOnly={true}
      precision={0.5}
      />
    </section>

  );
}

