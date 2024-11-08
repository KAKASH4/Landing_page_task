// src/components/About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        We are committed to making a difference through generous donations.
        Your contributions help us create meaningful change in communities worldwide.
      </p>
      <h2>Donations</h2>
      <div className="donators">
        <div className="donator-card">
          <h3>Total Donations</h3>
          <p className="counter">₹ 5,00,000</p>
        </div>
        <div className="donator-card">
          <h3>Number of Donators</h3>
          <p className="counter">1,200</p>
        </div>
      </div>
    </section>
  );
}

export default About;
