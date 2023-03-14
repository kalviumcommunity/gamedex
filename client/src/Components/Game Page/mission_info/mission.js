import slide_image_1 from '../../../assets/watch.png';
import './Mission.css';
import Navbar from '../../Home/Navbar/Navbar';
import React,{ useState, useEffect } from 'react';
import Loading from '../../Loading/Loading';

function Mission() {
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 5000);
}, [])

  return ( isLoading ? (<Loading />) :
    <>
      <Navbar />
      <div className='container_mission'>
        <img src={slide_image_1} alt="slide_image" className='game_img_mission' />
        <h1 className='mission'>Mission 1</h1>
        <h1 className='story'>Mission Story Line</h1>
        <h1 className='tutorial'>Tutorial</h1>
      </div>
    </>
  );
}

export default Mission;