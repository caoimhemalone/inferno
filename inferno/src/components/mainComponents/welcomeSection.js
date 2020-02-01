import React from 'react';
import welcomeImage from './images/welcome.jpg';

function Welcome() {
  return (
   <section className="welcome-section" id="welcome">
    <div className="container">
      <div className="text-left">
        <h1>Welcome to Inferno</h1>
        <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>

        <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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
