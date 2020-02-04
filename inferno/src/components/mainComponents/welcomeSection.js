import React from 'react';
import welcomeImage from './images/welcome.jpg';

function Welcome() {
  return (
   <section className="welcome-section" id="welcome">
    <div className="container">
      <div className="text-left">
        <h1>Welcome to Inferno</h1>
        <p className="intro">Currently Our Inferno Studio's are located on Dublin's Northside in Santry and Kilbarrack.</p>

        <p>At Inferno we encourage and coach our clients to be the best version of themselves they can be. To push beyond their limits and to explore extremes outside their comfort zones. We’re dedicated to helping men and women who struggle with weight loss, decreased energy and fitness levels to get back to levels they didn’t think possible. </p>

        <div className="book-btn">
          <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">Book Now</a>
        </div>
      </div>
      <div className="image-right">
        <img src={welcomeImage} alt="tablet"/>
      </div>
    </div>
     
   </section>
  );
}

export default Welcome;
