import React from "react";
import ReactLoading from "react-loading"
import versusIcon from '../../../assets/images/versus.png'


export default function Searching(props) {
  return (
  <div className="searching-container">
    <div className="loading-icon-area">
      <ReactLoading type={'spinningBubbles'} color={'#61d5fe'} height={'100%'} width={'100%'}/>
      <img className='loading-versus-icon' src={versusIcon}></img>
    </div>
  </div>
  );
}
