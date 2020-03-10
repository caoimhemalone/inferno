import React from 'react';
import leftImage from './images/classes.jpg';



class Timetable extends React.Component {
   constructor(props) {    
    super(props)
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }

   render() {
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
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              6:00am, 10:00am, 6:30pm, 7:30pm
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              1:00pm, 6:00pm
                           </div>
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
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              1:00pm
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              6:00am, 10:00am, 6:30pm, 7:30pm
                           </div>
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
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              6:00am, 10:00am
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              1:00pm
                           </div>
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
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              1:00pm
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              6:00am, 10:00am, 6:30pm, 7:30pm
                           </div>
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
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              6:00am, 10:00am, 6:30pm, 7:30pm
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              1:00pm, 6:00pm
                           </div>
                        </div>
                        <div className="right-container">
                           <div className="book-btn">
                              <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                           </div>
                        </div>
                     </li>

                     <li>
                        <div className="left-container">
                           <div className="day">Saturday</div>
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              9:00am, 10:00am
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              8:00am, 9:00am
                           </div>
                        </div>
                        <div className="right-container">
                           <div className="book-btn">
                              <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                           </div>
                        </div>
                     </li>

                     <li>
                        <div className="left-container">
                           <div className="day">Sunday</div>
                           <div className="time santry">
                              <h2 className="santry-heading">Santry<em>:</em></h2>
                              9:30am, 10:30am
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              9:00am, 10:00am
                           </div>
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
}

export default Timetable;
