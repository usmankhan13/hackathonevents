import React from 'react';
import Slider from '../LandingPage/slider'
import HackerSection from '../LandingPage/hackerSection'
import WorkSection from '../LandingPage/workSection'
import NonHackerSection from '../LandingPage/NonHacker'
import Navbar from '../LandingPage/navbar'
function Home() {
    return (
      <div>
      <Navbar/>
      <Slider/>
      <HackerSection/>
      <WorkSection/>
      <NonHackerSection/>
      </div>
    );
  }
  
  export default Home;
  