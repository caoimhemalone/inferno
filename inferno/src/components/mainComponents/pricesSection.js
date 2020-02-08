import React from 'react';
import bike from './images/stationary-bike.svg';
import row from './images/rowing-machine.svg';
import ski from './images/skiing.svg';
import heart from './images/heart.svg';


function Prices() {
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
   					<h3 className="12-session-heading">12 Session Pack</h3>
   					<span className="info">Access to any 12 INFERNO sessions </span>
   					<span className="price">€120</span>
   				</a>
   			</div>
   			<div className="col-md-6 price-item">
   				<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
   					<div className="img-container">
	   					<img src={row} alt="row"/>
	   				</div>
	   				<h3 className="7-day-heading">7 Day Intro Package</h3>
	   				<span className="info">Unlimited access to a week of calorie torching Inferno sessions in our Santry & Kilbarrack studios. The perfect opportunity to come down and try out our amazing sessions. </span>
	   				<span className="price">€20</span>
	   			</a>
   			</div>
   			<div className="col-md-6 price-item">
   				<a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
   					<div className="img-container">
	   					<img src={ski} alt="ski"/>
	   				</div>
	   				<h3 className="8-session-heading">8 Session Pack</h3>
	   				<span className="info">Access to any 8 INFERNO sessions.</span>
	   				<span className="price">€100</span>
	   			</a>
   			</div>
            <div className="col-md-6 price-item">
               <a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">
                  <div className="img-container">
                     <img src={heart} alt="heart"/>
                  </div>
                  <h3 className="unlimited-session-heading">Unlimited Sessions</h3>
                  <span className="info">62 sessions.</span>
                  <span className="price">€200</span>
               </a>
            </div>
   		</div>
   	</div>
   </section>
  );
}

export default Prices;
