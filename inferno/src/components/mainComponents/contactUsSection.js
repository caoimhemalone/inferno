import React from 'react';
import location  from './images/placeholder.svg';
import email from './images/letter.svg';
import phone from './images/phone.svg';
import axios from 'axios';



class About extends React.Component {
   state = {
      ttable: {},
      isLoaded: false
   }

   componentDidMount(){
      axios.get('https://www.infernofitness.ie/wp/wp-json/wp/v2/page_content')
      .then(res => this.setState({
         abouttable: res.data,
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
      const {abouttable, isLoaded } = this.state;
      if(isLoaded) {
         return (

            <section className="about-section">
               <div className="container">
                    <div className="about-top">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className="container bottom-container">
                  <div className="about-left">
                     <div className="map" id="map">
                     </div>
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
                              <div className="kilbarrack">
                                 <h4>Kilbarrack</h4>
                                 <span className="location"><a href="https://goo.gl/maps/TCyxzKms88oAPPpJ9" target="_blank" rel="noopener noreferrer">Ignite Health & Fitness, Unit 3, Howth Junction Business Park,<br/> Kilbarrack,<br/> Dublin, D05 AX70 </a></span>
                              </div>

                              <div className="santry">
                                 <h4>Santry</h4>
                                 <span className="location"><a href="https://goo.gl/maps/oEkvw6xqzCL2" target="_blank" rel="noopener noreferrer">Bodynamics, Unit 3c Santry Hall Industrial Estate,<br/> Swords Road,<br/> Dublin 9 </a></span>
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
      } return null
   }
}

export default About;
