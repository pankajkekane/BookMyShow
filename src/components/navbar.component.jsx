import React from "react";
import {BiChevronRight} from "react-icons/bi"

const NavSm = () =>{
    return (
        <>
        <div>
            <div className="text-white">
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Mumbai <BiChevronRight/>
                    </span>
            </div>
        </div>
        </>
    )
};

const NavMd = () =>{};
const NavLg = () =>{};


 const Navbar = () => {
     return<>
     <nav className="bg-bms-700 px-4 py-4">
         <div className="md:hidden"> <NavSm/> </div>    

         <div className ="hidden md:flex lg:hidden"></div>        

         <div className = "hidden lg:flex"></div>    
            </nav>
     </>
 };

 export default Navbar;