// src/components/Hero.js

import React from 'react';
import hero from '../../assets/heroimage.png';
import bthero from "../../assets/bottom-hero.png"
import './Hero.css';

function Hero() {
  return (
    <>
    <section className="hero">
      <div>
        <h1>Donate Now</h1>
        <p>Always give without remembering and always receive without forgetting </p>
      </div>
      <div className="image-container">
        <img className="hero-image" src={hero} alt="loading!!!" />
      </div>
    </section>
    <img className='bthero' src={bthero} alt='bottom loading !!!'/>
    </>
  );
}

export default Hero;
