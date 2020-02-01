import React from 'react';
import location  from './images/placeholder.svg';
import email from './images/letter.svg';
import phone from './images/phone.svg';

function About() {
  return (
   <section className="about-section">
      <div className="container">
         <div className="about-left">
            <div className="map" id="map">
            </div>
         </div>

         <div className="about-right">
            <div className="about-info">
               <h2>About Us</h2>
               <ul>
                  <li>
                     <div className="img-container">
                        <img src={location} alt="location"/>
                     </div>

                     <div className="info-container">
                        <h3>Location</h3>
                        <span className="location"><a href="https://goo.gl/maps/oEkvw6xqzCL2" target="_blank">Unit 3c Santry Hall Industrial Estate,<br/> Swords Road,<br/> Dublin 9 </a></span>
                     </div>
                  </li>

                  <li>
                     <div className="img-container">
                        <img src={email} alt="email"/>
                     </div>

                     <div className="info-container">
                        <h3>Email</h3>
                        <span className="email"><a href="mailto:infernofitnessteam@gmail.com" >infernofitnessteam@gmail.com</a></span>
                     </div>
                  </li>

                  <li>
                     <div className="img-container">
                        <img src={phone} alt="phone"/>
                     </div>

                     <div className="info-container">
                        <h3>Phone</h3>
                        <span className="phone"><a href="tel:555-555-5555">000000000</a></span>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </section>
  );
}

export default About;
