import React from 'react';
import logo from './footer-logo.png';

function Footer() {
  return (
   <footer>
   	<div className="container">
   		<div className="row">
   			<div className="col-md-3 footer-item footer-logo">
   				<img src={logo} alt="logo"/>
               <span>It's <strong>YOU VS YOU</strong></span>
   			</div>
   			<div className="col-md-3 offset-lg-1 footer-item">
   				<h3>Follow Us</h3>

               <ul>
                  <li>Facebook: <a href="https://www.facebook.com/InfernoFit/" target="_blank" rel="noopener noreferrer">@infernofit</a></li>
                  <li>Instagram: <a href="https://www.instagram.com/inferno_fitness_dublin" target="_blank" rel="noopener noreferrer">@inferno_fitness_dublin</a></li>
               </ul>
   			</div>
   			<div className="col-md-2 footer-item">
   				<h3>Prices</h3>
               <ul>
                  <li><a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">12 Session Pack</a></li>
                  <li><a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">7 Day Intro Pack</a></li>
                  <li><a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">8 Session Pack</a></li>
                  <li><a className="price-box" href="https://inferno.wodify.com/OnlineSalesPortal/Home.aspx" target="_blank" rel="noopener noreferrer">Unlimited Sessions</a></li>
               </ul>
   			</div>
   			<div className="col-md-3 footer-item">
   				<h3>Get Info</h3>

               <ul>
                  <li>Locations: <a href="https://goo.gl/maps/TCyxzKms88oAPPpJ9" target="_blank" rel="noopener noreferrer">Killester, </a><a href="https://goo.gl/maps/oEkvw6xqzCL2" target="_blank" rel="noopener noreferrer">Santry</a></li>
                  <li>Email: <a href="mailto:infernofitnessteam@gmail.com" rel="noopener noreferrer">infernofitnessteam@gmail.com</a></li>
                  <li>Phone: <a href="tel:(01) 839 4071" rel="noopener noreferrer">(01) 839 4071</a></li>
               </ul>
   			</div>
   		</div>

         <span className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
   	</div>
   </footer>
  );
}

export default Footer;
