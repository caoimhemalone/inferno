import React from 'react';
import bike from './images/stationary-bike.svg';
import row from './images/rowing-machine.svg';
import ski from './images/skiing.svg';


function Prices() {
  return (
   <section className="prices-section">
   	<div className="container">
   		<h2>Our Prices</h2>
   		<div className="row">
   			<div className="col-md-4 price-item">
   				<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">
   					<div className="img-container">
	   					<img src={bike} alt="bike"/>
	   				</div>
   					<h3 className="monthly-heading">Monthly</h3>
   					<span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </span>
   					<span className="price">€60</span>
   				</a>
   			</div>
   			<div className="col-md-4 price-item">
   				<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">
   					<div className="img-container">
	   					<img src={row} alt="row"/>
	   				</div>
	   				<h3 className="yearly-heading">Yearly</h3>
	   				<span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </span>
	   				<span className="price">€60</span>
	   			</a>
   			</div>
   			<div className="col-md-4 price-item">
   				<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank">
   					<div className="img-container">
	   					<img src={ski} alt="ski"/>
	   				</div>
	   				<h3 className="buddy-heading">Bring a Buddy</h3>
	   				<span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </span>
	   				<span className="price">€60</span>
	   			</a>
   			</div>
   		</div>
   	</div>
   </section>
  );
}

export default Prices;
