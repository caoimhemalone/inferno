import React from 'react';
import polar from './images/polar.png';
import polarWhite from './images/blackwhite.jpg';



function Polar() {
  return (
   <section className="polar-section" style={{backgroundImage: "url(" + polarWhite + ")"}}>
   	<h2>Powered by</h2>
   	<a href="https://www.polar.com/en/club" target="_blank">
	   	<img src={polar} alt="polar"/>
   	</a>
   </section>
  );
}

export default Polar;
