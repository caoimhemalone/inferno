import React from 'react';
import leftImage from './images/classes.jpg';
import axios from 'axios';



class Timetable extends React.Component {
   state = {
      ttable: {},
      isLoaded: false
   }

   componentDidMount(){
      axios.get('/wp-json/wp/v2/timetable')
      .then(res => this.setState({
         ttable: res.data,
         isLoaded: true
      }))
      .catch(err => console.log(err));
   }

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
      const {ttable, isLoaded } = this.state;
      if(isLoaded) {
         // console.log(ttable);
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_monday}</div>
                              ))}
                              {/* 6:00am, 10:00am, 6:30pm, 7:30pm */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_monday}</div>
                              ))}
                              {/* 1:00pm, 6:00pm */}
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_tuesday}</div>
                              ))}
                              {/* 1:00pm */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_tuesday}</div>
                              ))}
                              {/* 6:00am, 10:00am, 6:30pm, 7:30pm */}
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_wednesday}</div>
                              ))}
                              {/* 6:00am, 10:00am */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_wednesday}</div>
                              ))}
                              {/* 1:00pm */}
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_thursday}</div>
                              ))}
                              {/* 1:00pm */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_thursday}</div>
                              ))}
                              {/* 6:00am, 10:00am, 6:30pm, 7:30pm */}
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_friday}</div>
                              ))}
                              {/* 6:00am, 10:00am, 6:30pm, 7:30pm */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_friday}</div>
                              ))}
                              {/* 1:00pm, 6:00pm */}
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_saturday}</div>
                              ))}
                              {/* 9:00am, 10:00am */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_saturday}</div>
                              ))}
                              {/* 8:00am, 9:00am */}
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
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.santry_sunday}</div>
                              ))}
                              {/* 9:30am, 10:30am */}
                           </div>
                           <div className="time kilbarrack">
                              <h2 className="kilbarrack-heading">Kilbarrack<em>:</em></h2>
                              {ttable.map(timetable => (
                              <div key={timetable.id}>{timetable.acf.kilbarrack_sunday}</div>
                              ))}
                              {/* 9:00am, 10:00am */}
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

      return <h3>Loading...</h3>
   }
}

export default Timetable;
