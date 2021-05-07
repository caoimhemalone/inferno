import React from 'react';
import { Player } from 'video-react';
import vidOne from './video/test-1.mp4';
import imgOne from './images/test-1.png';
import vidTwo from './video/test-2.mp4';
import imgTwo from './images/test-2.png';

function Video() {
  return (
   <section className="video-test-section">
   	<div className="row">
		<div className="col-12">
		   	<h2>A word from our Clients</h2>
		</div>
   		<div className="col-md-6 video-item">
		    <Player
		      playsInline
		      poster={imgOne}
		      src={vidOne}
		    />
	     </div>
   		<div className="col-md-6 video-item">
		    <Player
		      playsInline
		      poster={imgTwo}
		      src={vidTwo}
		    />
      	</div>
   	</div>
   </section>
  );
}

export default Video;
