// src/components/Sponsors.js

import React from 'react';
import sponsor1 from '../../assets/Sponsor1.png';
import sponsor2 from '../../assets/Sponsor2.jpeg';
import sponsor3 from '../../assets/Sponsor3.png';
import './Sponser.css';

function Sponser() {
  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsors-marquee">
        <div className="sponsor-track">
          <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
          <img src={sponsor3} alt="Sponsor 3" />
          <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
          <img src={sponsor3} alt="Sponsor 3" />
          <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
          <img src={sponsor3} alt="Sponsor 3" />
        </div>
      </div>
    </section>
  );
}

export default Sponser;
