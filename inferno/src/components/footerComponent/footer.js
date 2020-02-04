import React from 'react';
import logo from './footer-logo.png';

function Footer() {
  return (
   <footer>
   	<div className="container">
   		<div className="row">
   			<div className="col-lg-3 footer-item footer-logo">
   				<img src={logo} alt="logo"/>
               <span>It's <strong>YOU VS YOU</strong></span>
   			</div>
   			<div className="col-lg-3 offset-lg-1 footer-item">
   				<h3>Follow Us</h3>

               <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
               </ul>
   			</div>
   			<div className="col-lg-2 footer-item">
   				<h3>Prices</h3>
               <ul>
                  <li>Monthly</li>
                  <li>Yearly</li>
                  <li>Bring a Buddy</li>
               </ul>
   			</div>
   			<div className="col-lg-3 footer-item">
   				<h3>Get Info</h3>

               <ul>
                  <li>Location</li>
                  <li>Email</li>
                  <li>Phone</li>
               </ul>
   			</div>
   		</div>

         <span className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
   	</div>
   </footer>
  );
}

export default Footer;
