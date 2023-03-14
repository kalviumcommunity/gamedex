import './Info.css';
import Navbar from '../../Home/Navbar/Navbar';
import React,{ useState, useEffect } from 'react';
import Loading from '../../Loading/Loading';
import { Link } from "react-router-dom";

import slide_image_1 from '../../../assets/watch.png';

function Info() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 5000);
}, [])

  return ( isLoading ? (<Loading />) :
    <>
      <Navbar />
      <div className='container_main'>
        <div className='card'>
          <img src={slide_image_1} alt="slide_image" className='game_img_main' />
          <h1 className='name'>About the game</h1>
        </div>
        <h1 className='specifications'>Specifications</h1>
        <Link to="/mission"><h1 className='list'>Mission List</h1></Link>
        <h1 className='ss'>Game play, Screenshots</h1>
        <h1 className='review'>Public Review</h1>
      </div>
    </>
  );
}

export default Info;