import React from "react";


import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/premieres/premier.component";



const HomePage = () => {
    return(
        <>
         <div className="container mx-auto px-28">
             <h1 className="text-xl font-bold text-grey-800  my-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
        <Premier/>
        </div>
        </>
    );
};

export default HomePage;