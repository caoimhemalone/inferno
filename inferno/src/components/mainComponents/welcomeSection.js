import React from 'react';
import { Player } from 'video-react';
import axios from 'axios';


import welcomeVid from './video/main-video.mp4';
import welcomeImage from './images/welcome.jpg';

class Welcome extends React.Component {
  state = {
    pagetable: {},
    isLoaded: false
  }  

  componentDidMount(){
      axios.get('https://www.infernofitness.ie/wp/wp-json/wp/v2/page_content')
      .then(res => this.setState({
        pagetable: res.data,
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
    const {pagetable, isLoaded } = this.state;
    if(isLoaded) {
      return (
        <section className="welcome-section" id="welcome">
          <div className="container">
            <div className="text-left">

              {pagetable.map(pageContent => (
                <h2 key={pageContent.id}>{pageContent.acf.welcome_heading}</h2>
              ))}

              {pagetable.map(pageContent => (
                <p key={pageContent.id} dangerouslySetInnerHTML={{ __html: pageContent.acf.welcome_text }} />
              ))}

              <div className="book-btn">
                <a href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Book Now</a>
              </div>
            </div>
            <div className="image-right">
              <Player playsInline poster={welcomeImage} src={welcomeVid}/>
            </div>
          </div>   
        </section>
      );
    } return null
  }
}

export default Welcome;
