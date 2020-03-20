import React, { Component } from "react";

//components
import Hero from './components/headerComponent/heroSection';
import Covid from './components/headerComponent/covid-19';
import Video from './components/mainComponents/videoSection';
import Welcome from './components/mainComponents/welcomeSection';
import Polar from './components/mainComponents/polarSection';
import Prices from './components/mainComponents/pricesSection';
import Team from './components/mainComponents/teamSection';
import Timetable from './components/mainComponents/timetableSection';
import Test from './components/mainComponents/testimoniesSection';
import Gallery from './components/mainComponents/gallerySection';
import About from './components/mainComponents/aboutUsSection';
import Footer from './components/footerComponent/footer';

//images
import logo from './nav-logo.png';



//includes
import './Assets/css/main.css';

import ScrollspyNav from "react-scrollspy-nav";
//import ScrollspyNavMobile from "react-scrollspy-nav";


class App extends Component {
state = {
    color: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({color: '#192029'})
    } else {
      this.setState({color: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return (
      <div>
        <div>
          <header style={{backgroundColor: this.state.color}}>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo"/>
              </a>
            </div>

            <nav className="menu-wrap desktopNav">
              <input type="checkbox" className="toggler"/>
              <div className="hamburger"><div></div></div>
              <div className="menu">
                <div>
                  <div>
                    <ScrollspyNav
                      scrollTargetIds={["timetableNav", "pricesNav", "aboutNav", "galleryNav"]}
                      offset={-100}
                      activeNavClass="is-active"
                      scrollDuration="1000"
                      headerBackground="true">
                      <ul>
                        <li>
                          <a href="#timetableNav">Timetable</a>
                        </li>
                        <li>
                          <a href="#pricesNav">Prices</a>
                        </li>
                        <li>
                          <a href="#aboutNav">About Us</a>
                        </li>
                        <li>
                          <a href="#galleryNav">Gallery</a>
                        </li>
                      </ul>
                    </ScrollspyNav>
                    <button className="signUp">
                      <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
        

        <div>
          <Covid />

          <Hero />

          <Welcome />

          <Polar />
          <div id="timetableNav"><Timetable /></div>
          <Team />
          <div id="pricesNav"><Prices /></div>
          <Test />
          <Video />
          <div id="aboutNav"><About /></div>
          <div id="galleryNav"><Gallery /></div>

          <Footer />
        </div>
      </div>
    );  
  }
}

export default App;