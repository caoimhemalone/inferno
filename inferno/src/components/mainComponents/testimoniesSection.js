import React from 'react';
import axios from 'axios';



class Test extends React.Component {
   state = {
      testtable: {},
      isLoaded: false
   }

   componentDidMount(){
      axios.get('https://www.infernofitness.ie/wp/wp-json/wp/v2/page_content')
      .then(res => this.setState({
         testtable: res.data,
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
    const {testtable, isLoaded } = this.state;
    if(isLoaded) {
        console.log(testtable);
        return (
        <section className="testimony-section">
          <div className="container">
            <h2>What Our Clients Say</h2>

            <ul>
              <li>
                {testtable.map(testimonies => (
                  <h3 key={testimonies.id}>{testimonies.acf.client_testimonial_name_one}</h3>
                ))}
                {testtable.map(testimonies => (
                  <span key={testimonies.id}>{testimonies.acf.client_testimonial_description_one}</span>
                ))}
              </li>

              <li>
                {testtable.map(testimonies => (
                  <h3 key={testimonies.id}>{testimonies.acf.client_testimonial_name_two}</h3>
                ))}
                {testtable.map(testimonies => (
                  <span key={testimonies.id}>{testimonies.acf.client_testimonial_description_two}</span>
                ))}
              </li>

              <li>
                {testtable.map(testimonies => (
                  <h3 key={testimonies.id}>{testimonies.acf.client_testimonial_name_three}</h3>
                ))}
                {testtable.map(testimonies => (
                  <span key={testimonies.id}>{testimonies.acf.client_testimonial_description_three}</span>
                ))}
              </li>
            </ul>
          </div>
          
        </section>
        );
    } return null
  }
}

export default Test;
