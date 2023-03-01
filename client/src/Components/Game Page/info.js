import './info.css';

import slide_image_1 from '../../assets/watch.png';
import slide_image_2 from '../../assets/racing.png';
import slide_image_3 from '../../assets/horror.png';
import slide_image_4 from '../../assets/survival.png';
import slide_image_5 from '../../assets/sports.png';
import slide_image_6 from '../../assets/adventure.png';
import slide_image_7 from '../../assets/strategy.png';
import slide_image_8 from '../../assets/fighting.png';
import slide_image_9 from '../../assets/world.png';


function info() {
  return (
    <div className='container_main'>
      <div className='card'>
          <img src={slide_image_1} alt="slide_image" className='game_img_main' />
          <h1 className='name'>About the game</h1>
      </div>
      <h1 className='specifications'>Specifications</h1>
      <h1 className='list'>Mission List</h1>
      <h1 className='ss'>Game play, Screenshots</h1>
      <h1 className='review'>Public Review</h1>
    </div>
  );
}

export default info;