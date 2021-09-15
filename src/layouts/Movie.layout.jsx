import React from 'react'

import Navbar from '../components/navbar.component';


const MovieLayout = (props) => {
    return 
        <>
             <Navbar />
    {props.children}
        </>;
    
};

export default MovieLayout;