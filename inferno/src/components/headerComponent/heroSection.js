import React from 'react';

import heroOne from './heroImages/hero_1.png';

function Hero() {
  return (
    <section className="hero-section">
      <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
        <div className="single-hero-item set-bg" data-setbg="{{heroOne}}" style={{backgroundImage: "url(" + heroOne + ")"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-text">
                  <h2>Inferno Fitness</h2>
                  <h1>SKI, BIKE, ROW</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

export default Hero;
