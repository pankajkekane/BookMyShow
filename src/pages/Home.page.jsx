import React from "react";


import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";



//configs
import TempPosters from "../config/TempPosters.config"


const HomePage = () => {
    return(
        <>
         <div className="flex flex-col gap-10">
         <div className="container mx-auto px-4">
             <h1 className="text-xl font-bold text-grey-800 py-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
        </div>

        <div className= "bg-bms-800 py-12 ">
        <div className="container mx-auto px-14 flex flex-col gap-3">
       
            <div className="hidden md:flex">
                
                    <img  src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" className="w-full h-full"/>
    
               
            </div>
        <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand new release every friday"/>
        </div>
        </div>
         </div>
        </>
    );
};

export default HomePage;