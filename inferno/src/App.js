import React from 'react';

//components
import Header from './components/headerComponent/header';
import Hero from './components/headerComponent/heroSection';
import Video from './components/mainComponents/videoSection';
import Welcome from './components/mainComponents/welcomeSection';
import Polar from './components/mainComponents/polarSection';
import Prices from './components/mainComponents/pricesSection';
import Team from './components/mainComponents/teamSection';
import Timetable from './components/mainComponents/timetableSection';
import Test from './components/mainComponents/testimoniesSection';
import About from './components/mainComponents/aboutUsSection';
import Footer from './components/footerComponent/footer';


//includes
import './Assets/css/main.css';


function App() {
  return (
    <div className="App">
     	<Header />
     	<Hero />

     	<Welcome />

		<Polar />
     	<Video />
     	<Timetable />
     	<Team />
     	<Prices />
     	<Test />
     	<About />

      <Footer />
    </div>
  );
}

export default App;
