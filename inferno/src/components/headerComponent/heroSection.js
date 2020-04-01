import React from 'react';
import Header from './header';

import heroOne from './heroImages/hero_1.png';

class Hero extends React.Component {


  render() {
    return (
    <section className="hero-section">
      <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
        <div className="single-hero-item set-bg" data-setbg={{heroOne}} style={{backgroundImage: "url(" + heroOne + ")"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-text">
                    <Header />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    );
 }
}

export default Hero;
