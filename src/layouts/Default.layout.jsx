import React from 'react';


//components
import Navbar from '../components/navbar.component';
import HeroCarousal from '../components/Hero Carousal/HeroCarousal.component';

const DefaultLayout = () => {
    return <>
    <Navbar />
    <HeroCarousal/>
  </>;
};
  
export default DefaultLayout;