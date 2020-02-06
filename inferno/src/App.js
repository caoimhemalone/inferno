import React, { Component } from "react";

//components
import Hero from './components/headerComponent/heroSection';
import Video from './components/mainComponents/videoSection';
import Welcome from './components/mainComponents/welcomeSection';
import Polar from './components/mainComponents/polarSection';
import Prices from './components/mainComponents/pricesSection';
import Team from './components/mainComponents/teamSection';
import Timetable from './components/mainComponents/timetableSection';
import Test from './components/mainComponents/testimoniesSection';
import About from './components/mainComponents/aboutUsSection';
import Footer from './components/footerComponent/footer';

//images
import logo from './nav-logo.png';


//includes
import './Assets/css/main.css';

import ScrollspyNav from "react-scrollspy-nav";


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

            <div className="menu-wrap mobileNav">
              <input type="checkbox" className="toggler"/>
              <div className="hamburger"><div></div></div>
              <div className="menu">
                <div>
                  <div>
                    <ul>
                      <li>
                        Timetable
                      </li>
                      <li>
                        Prices
                      </li>
                      <li>
                        About Us
                      </li>
                      <li className="signUp">
                        <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <nav className="desktopNav">
              <ScrollspyNav
                scrollTargetIds={["timetableNav", "pricesNav", "aboutNav"]}
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
                    <a>Gallery</a>
                  </li>
                </ul>
              </ScrollspyNav>
              <button className="signUp">
                <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
              </button>
            </nav>
          </header>
        </div>
        

        <div>
          <Hero />

          <Welcome />

          <Polar />
          <Video />
          <div id="timetableNav"><Timetable /></div>
          <Team />
          <div id="pricesNav"><Prices /></div>
          <Test />
          <div id="aboutNav"><About /></div>

          <Footer />
        </div>
      </div>
    );  
  }
}

export default App;