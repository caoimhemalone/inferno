import React from 'react';
import leftImage from './images/classes.jpg';
var Scroll = require('react-scroll');

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;


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
            <li>
               <div className="left-container">
                  <div className="day">Monday</div>
                  <div className="time">11:00am, 1:00pm, 5:00pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">Book Now</a>
                  </div>
               </div>

            </li>

            <li>
               <div className="left-container">
                  <div className="day">Wednesday</div>
                  <div className="time">10:00am, 3:00pm, 7:00pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">Book Now</a>
                  </div>
               </div>

            </li>

            <li>
               <div className="left-container">
                  <div className="day">Friday</div>
                  <div className="time">10:00am, 11:00am, 1:00pm, 5:00pm, 8:00pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">Book Now</a>
                  </div>
               </div>

            </li>

            <li>
               <div className="left-container">
                  <div className="day">Saturday</div>
                  <div className="time">11:00am, 12:00pm 1:00pm, 2:00pm</div>
               </div>
               <div className="right-container">
                  <div className="book-btn">
                     <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">Book Now</a>
                  </div>
               </div>

            </li>
         </ul>
      </div>
   </section>
  );
}

export default Timetable;
