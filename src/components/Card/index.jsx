import React from 'react';
import './Card.scss';
import Loader from "react-js-loader";

const Card = ({ src }) => {
  return(
    <div className='container-card'>
      {!src ? <Loader type="spinner-default" bgColor={"#FFFFFF"}  size={100} /> : <img src={src} alt=''></img>}
    </div>
  );
};

export default Card;