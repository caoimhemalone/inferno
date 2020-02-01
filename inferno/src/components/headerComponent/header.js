import React from 'react';
import logo from './nav-logo.png';


export default class Header extends React.Component{
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
                <a >Timetable</a>
              </li>
              <li>
                <a href="#">Prices</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li className="signUp">
                <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">Book Now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <nav className="desktopNav">
      <ul>
        <li>
          <a href="#">Timetable</a>
        </li>
        <li>
          <a href="#">Prices</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li className="signUp">
          <a href="#">Book Now</a>
        </li>
      </ul>
    </nav>
   </header>
  );
}
}

