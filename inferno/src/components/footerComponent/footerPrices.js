import React from 'react';
import axios from 'axios';


class FooterPrices extends React.Component {
	state = {
	   pricetable: {},
	   isLoaded: false
	}
 
	componentDidMount(){
	   axios.get('https://www.infernofitness.ie/wp/wp-json/wp/v2/page_content')
	   .then(res => this.setState({
		  pricetable: res.data,
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
	   	const {pricetable, isLoaded } = this.state;
	   	if(isLoaded) {
		    return (
                <ul>
                    <li>
                        {pricetable.map(prices => (
                            <a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer" key={prices.id}>{prices.acf.price_heading_one}</a>
                        ))}
                    </li>
                    <li>
                        {pricetable.map(prices => (
                            <a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer" key={prices.id}>{prices.acf.price_heading_two}</a>
                        ))}
                    </li>
                    <li>
                        {pricetable.map(prices => (
                            <a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer" key={prices.id}>{prices.acf.price_heading_three}</a>
                        ))}
                    </li>
                    <li>
                        {pricetable.map(prices => (
                            <a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer" key={prices.id}>{prices.acf.price_heading_four}</a>
                        ))}
                    </li>
                </ul>
        
            );
        } return null
    }
}

export default FooterPrices;
