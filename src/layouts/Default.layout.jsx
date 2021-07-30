import React from 'react';


//components
import Navbar from '../components/navbar.component';
import HeroCarousal from '../components/Hero Carousal/HeroCarousal.component'

const DefaultLayout = (props) => {
    return( 
    <>
    <Navbar />
    <HeroCarousal/>
    {props.children}
  </>
    );
};
  
export default DefaultLayout;