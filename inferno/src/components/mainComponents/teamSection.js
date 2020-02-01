import React from 'react';
import Nick from './images/nick.png';


function Team() {
  return (
   <section className="team-section">
   	<div className="container">
	   	<h2>Our Team</h2>

	   	<ul>
	   		<li>
	   			<img src={Nick} alt="Nick"/>
	   			<span>Name</span>
	   		</li>

	   		<li>
	   			<img src={Nick} alt="Nick"/>
	   			<span>Name</span>
	   		</li>

	   		<li>
	   			<img src={Nick} alt="Nick"/>
	   			<span>Name</span>
	   		</li>

	   		<li>
	   			<img src={Nick} alt="Nick"/>
	   			<span>Name</span>
	   		</li>

	   		<li>
	   			<img src={Nick} alt="Nick"/>
	   			<span>Name</span>
	   		</li>
	   	</ul>
   </div>
   </section>
  );
}

export default Team;
