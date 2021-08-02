import React from 'react';
import Card from './components/Card/index.jsx';
import ListDogs from './components/ListDogs/index.jsx';

import * as constants from './constants.jsx'
import { useState, useEffect } from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {

  const[dogImg, setDogImg] = useState('');
  const[dogs, setDogs] = useState([]);

  const hendlFetchImg = (name) => {
    return fetch(`https://dog.ceo/api/breed/${name}/images/random`).then((res) => {
      return res.json().then(res => {
        return setDogImg(res.message);
      });
    });
  };

  const hendlFetch = (link) => {
    let dogsAllName = [];
    return fetch(link).then((res) => {
      return res.json().then(res => {
        for(let key in res.message) {
          dogsAllName = [...dogsAllName, key];
        };
        setDogs(dogsAllName);
      });
    });
  };

  const handlClick = (name) => {
    hendlFetchImg(name);
  };

  useEffect(() => {
    const random = constants.dogsName[Math.floor(constants.dogsName.length * Math.random())];
    hendlFetchImg(random.name);
    hendlFetch(constants.link);
   },[]);

   return (
      <div className='bg'>
        <div className='container'>
          <h1 className='lago'>DOGS PHOTO RANDOM <i className="fa fa-paw"></i></h1>
          <div className='content'>
            <ListDogs dogsName={dogs} dogs={dogs.dogs} handlClick={handlClick} />
            <Card src={dogImg} />
          </div>
        </div>
      </div>
    ); 
};
export default App;