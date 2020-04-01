import React from 'react';
import axios from 'axios';

import bike from './images/stationary-bike.svg';
import row from './images/rowing-machine.svg';
import ski from './images/skiing.svg';
import heart from './images/heart.svg';

class Prices extends React.Component {
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
			<section className="prices-section">
				<div className="container">
					<h2>Our Prices</h2>
					<div className="row">
						<div className="col-md-6 price-item">
							<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
								<div className="img-container">
									<img src={bike} alt="bike"/>
								</div>
								{pricetable.map(prices => (
									<h3 key={prices.id}>{prices.acf.price_heading_one}</h3>
								))}
								{pricetable.map(prices => (
									<span className="info" key={prices.id}>{prices.acf.price_description_one}</span>
								))}
								{pricetable.map(prices => (
									<span className="price" key={prices.id}>{prices.acf.price_value_one}</span>
								))}
							</a>
						</div>
						<div className="col-md-6 price-item">
							<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
								<div className="img-container">
									<img src={row} alt="row"/>
								</div>
								{pricetable.map(prices => (
									<h3 key={prices.id}>{prices.acf.price_heading_two}</h3>
								))}
								{pricetable.map(prices => (
									<span className="info" key={prices.id}>{prices.acf.price_description_two}</span>
								))}
								{pricetable.map(prices => (
									<span className="price" key={prices.id}>{prices.acf.price_value_two}</span>
								))}
							</a>
						</div>
						<div className="col-md-6 price-item">
							<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
								<div className="img-container">
									<img src={ski} alt="ski"/>
								</div>
								{pricetable.map(prices => (
									<h3 key={prices.id}>{prices.acf.price_heading_three}</h3>
								))}
								{pricetable.map(prices => (
									<span className="info" key={prices.id}>{prices.acf.price_description_three}</span>
								))}
								{pricetable.map(prices => (
									<span className="price" key={prices.id}>{prices.acf.price_value_three}</span>
								))}
							</a>
						</div>
						<div className="col-md-6 price-item">
						<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
							<div className="img-container">
								<img src={heart} alt="heart"/>
							</div>
							{pricetable.map(prices => (
									<h3 key={prices.id}>{prices.acf.price_heading_four}</h3>
								))}
								{pricetable.map(prices => (
									<span className="info" key={prices.id}>{prices.acf.price_description_four}</span>
								))}
								{pricetable.map(prices => (
									<span className="price" key={prices.id}>{prices.acf.price_value_four}</span>
								))}
						</a>
						</div>
					</div>
				</div>
			</section>
			);
		} return null
	}
}

export default Prices;
