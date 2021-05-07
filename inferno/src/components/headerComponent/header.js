import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  state = {
    seo_table: {},
    isLoaded: false
  }
  
  componentDidMount(){
    axios.get('https://www.infernofitness.ie/wp/wp-json/wp/v2/seo_content')
    .then(res => this.setState({
       seo_table: res.data,
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
    const {seo_table, isLoaded } = this.state;
    if(isLoaded) {
       return (
           <div>
            {seo_table.map(seo_content => (
            <h1 key={seo_content.id}>{seo_content.acf.h1}</h1>
            ))}
            {seo_table.map(seo_content => (
            <span key={seo_content.id}>{seo_content.acf.header_span}</span>
            ))}
            </div>
       );
    }

    return null;
 }
}

export default Header;
