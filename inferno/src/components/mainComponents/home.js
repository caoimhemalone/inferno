import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Hero from './headerComponent/heroSection';
import Video from './mainComponents/videoSection';
import Welcome from './mainComponents/welcomeSection';
import Polar from './mainComponents/polarSection';
import Prices from './mainComponents/pricesSection';
import Team from './mainComponents/teamSection';
import Timetable from './mainComponents/timetableSection';
import Test from './mainComponents/testimoniesSection';
import About from './mainComponents/aboutUsSection';

//images
import logo from './nav-logo.png';


import ScrollspyNav from "react-scrollspy-nav";
//import ScrollspyNavMobile from "react-scrollspy-nav";


class Home extends Component {
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

            {/*<nav className="menu-wrap mobileNav">
              <input type="checkbox" className="toggler"/>
              <div className="hamburger"><div></div></div>
              <div className="menu">
                <div>
                  <div>
                    <ScrollspyNavMobile
                      scrollTargetIds={["timetableMobileNav", "pricesMobileNav", "aboutMobileNav"]}
                      offset={-100}
                      activeNavClass="is-active"
                      scrollDuration="1000"
                      headerBackground="true">
                      <ul>
                        <li>
                          <a href="#timetableMobileNav">Timetable</a>
                        </li>
                        <li>
                          <a href="#pricesMobileNav">Prices</a>
                        </li>
                        <li>
                          <a href="#aboutMobileNav">About Us</a>
                        </li>
                        <li>
                          <a>Gallery</a>
                        </li>
                      </ul>
                    </ScrollspyNavMobile>
                    <button className="signUp">
                      <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
                    </button>
                  </div>
                </div>
              </div>
            </nav>*/}

            <nav className="menu-wrap desktopNav">
              <input type="checkbox" className="toggler"/>
              <div className="hamburger"><div></div></div>
              <div className="menu">
                <div>
                  <div>
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
                  </div>
                </div>
              </div>
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

        </div>
      </div>
    );  
  }
}

export default Home;