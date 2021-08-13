import React from "react";


import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/premieres/premier.component";



const HomePage = () => {
    return(
        <>
         <div className="container mx-auto px-28">
             <h1 className="text-xl font-bold text-grey-800 py-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
        </div>

        <div className= "bg-bms-800 py-16">
            <div className="hidden md:flex">
                <div>
                    <img  src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier" />
                </div>
               
            </div>
        <div className="container mx-auto px-20">
        <Premier/>
        </div>
        </div>
        </>
    );
};

export default HomePage;