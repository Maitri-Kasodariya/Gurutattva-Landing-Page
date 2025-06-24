import { React } from 'react'
import mountainImage from '../../assets/mountains.png';
import './Hero.css';

function Hero() {

  return (
    <div className='hero'>
      <img src={mountainImage} alt="Mountains" />
      <div class="blur-bottom"></div>
      <div className='content'>
        <h1 className='title'>Himalayan Meditation</h1>
        <h2 className='subtitle'>Awaken the silence within</h2>
        <button>Learn more</button>
      </div>

    </div>
  );
};

export default Hero