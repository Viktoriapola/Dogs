import React from 'react';
import './ListDogs.scss';

const ListDogs = ({ dogsName, handlClick }) => {

  const onClick = (e) => {
    let string = e.target.innerText
    handlClick(string.toLowerCase());
  };

  return(
    <div className='container-list'>
      {dogsName.map((item, index) => {
        return <button onClick={onClick} key={index}>{item}</button>
      })};
    </div>
  );
};

export default ListDogs;