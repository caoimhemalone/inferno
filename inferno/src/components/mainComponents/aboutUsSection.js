import React from 'react';
import LazyLoad from 'react-lazyload';
import location  from './images/placeholder.svg';
import email from './images/letter.svg';
import phone from './images/phone.svg';


function About() {
  return (
   <section className="about-section">
      <div className="container">
       <div className="about-top">
            <h2>About Us</h2>
            <p>Our sessions take place inside our heated studios, using 3 different cardio machines (Rower, Bike and Ski machine). Not only does this give you an amazing full body workout but we also use Polar heart rate monitors to track your workouts in real time. This really adds to the experience as you can push yourself hard and also see how quick you can then recover. Track your calories burned each session and have a summary sent to your phone.</p>

           <p>This really is a great new training experience where it’s just you vs you.</p>

           <p>We cater for all Fitness Levels, from those who have never stepped inside a gym before to those who have played team sports and those who want to take the guessing away from what they should be doing. We constantly work hard to improve our knowledge of all things health and fitness related so our members get the best package for them and our ultimate goal is to help change their lives for the better.</p>
        </div>
     </div>
      <div className="container bottom-container">
         <div className="about-left">
            <LazyLoad>
              <div className="map" id="map">
              </div>
            </LazyLoad>
         </div>

         <div className="about-right">
            <div className="about-info">
               <ul>
                  <li>
                     <div className="img-container">
                        <img src={location} alt="location"/>
                     </div>

                     <div className="info-container">
                      <h3>Locations</h3>
                      <div className="killester">
                        <h4>Killester</h4>
                        <span className="location"><a href="https://goo.gl/maps/TCyxzKms88oAPPpJ9" target="_blank" rel="noopener noreferrer">Unit 3, Howth Junction Business Park,<br/> Kilbarrack,<br/> Dublin, D05 AX70 </a></span>
                      </div>

                      <div className="santry">
                        <h4>Santry</h4>
                        <span className="location"><a href="https://goo.gl/maps/oEkvw6xqzCL2" target="_blank" rel="noopener noreferrer">Unit 3c Santry Hall Industrial Estate,<br/> Swords Road,<br/> Dublin 9 </a></span>
                      </div>
                     </div>
                  </li>

                  <li>
                     <div className="img-container">
                        <img src={email} alt="email"/>
                     </div>

                     <div className="info-container">
                        <h3>Email</h3>
                        <span className="email"><a href="mailto:infernofitnessteam@gmail.com" rel="noopener noreferrer">infernofitnessteam@gmail.com</a></span>
                     </div>
                  </li>

                  <li>
                     <div className="img-container">
                        <img src={phone} alt="phone"/>
                     </div>

                     <div className="info-container">
                        <h3>Phone</h3>
                        <span className="phone"><a href="tel:(01) 839 4071" rel="noopener noreferrer">(01) 839 4071</a></span>
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
