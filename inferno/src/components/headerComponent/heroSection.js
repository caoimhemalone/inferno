import React from 'react';
/*import OwlCarousel from 'react-owl-carousel';*/
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import heroOne from './heroImages/hero_1.jpg';
import heroTwo from './heroImages/hero_2.jpg';
import heroThree from './heroImages/hero_3.jpg';
import heroFour from './heroImages/hero_4.jpg';

function Hero() {
  return (
    <section className="hero-section">
      <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">
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
