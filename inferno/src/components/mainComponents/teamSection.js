import React from 'react';
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import team3 from './images/team3.png';
import team4 from './images/team4.png';
import team5 from './images/team5.png';


function Team() {
  return (
   <section className="team-section">
   	<div className="container">
	   	<h2>Our Team</h2>

	   	<ul>
	   		<li>
	   			<img src={team1} alt="Team Member"/>
	   			{/*<span>Name</span> */}
	   		</li>

	   		<li>
	   			<img src={team2} alt="Team Member"/>
	   			{/*<span>Name</span> */}
	   		</li>

	   		<li>
	   			<img src={team3} alt="Team Member"/>
	   			{/*<span>Name</span> */}
	   		</li>

	   		<li>
	   			<img src={team4} alt="Team Member"/>
	   			{/*<span>Name</span> */}
	   		</li>

	   		<li>
	   			<img src={team5} alt="Team Member"/>
	   			{/*<span>Name</span> */}
	   		</li>
	   	</ul>
   </div>
   </section>
  );
}

export default Team;
