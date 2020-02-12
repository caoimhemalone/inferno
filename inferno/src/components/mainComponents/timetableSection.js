import React from 'react';
import leftImage from './images/classes.jpg';



function Timetable() {
  return (
  

 <section className="timetable-section" id="timetable">
      <div className="classesLeft" style={{backgroundImage: "url(" + leftImage + ")"}}>
         <span>
            <p>Class </p>
            <p>Schedule</p>
      </span>
      </div>
      <div className="classesRight">
         <ul>
            <h2>Santry</h2>
            <li>
               <div className="left-container">
                  <div className="day">Monday</div>
                  <div className="time">6:00am, 10:00am, 6:30pm, 7:30pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </div>
               </div>

            </li>

            <li>
               <div className="left-container">
                  <div className="day">Tuesday</div>
                  <div className="time">1:00pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </div>
               </div>

            </li>

            <li>
               <div className="left-container">
                  <div className="day">Wednesday</div>
                  <div className="time">6:00am, 10:00am</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </div>
               </div>

            </li>

            <li>
               <div className="left-container">
                  <div className="day">Thursday</div>
                  <div className="time">1:00pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </div>
               </div>
            </li>

            <li>
               <div className="left-container">
                  <div className="day">Friday</div>
                  <div className="time">6:00am, 10:00am, 6:30pm, 7:30pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </div>
               </div>
            </li>

            <li>
               <div className="left-container">
                  <div className="day">Saturday & Sunday</div>
                  <div className="time">9:00am, 10:00am</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </div>
               </div>
            </li>
         </ul>
      </div>
   </section>
  );
}

export default Timetable;
