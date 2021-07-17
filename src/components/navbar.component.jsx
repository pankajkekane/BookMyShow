import React from "react";
import {BiChevronRight , BiSearch, BiMenu, BiChevronsDown} from "react-icons/bi"

const NavSm = () =>{
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Mumbai <BiChevronRight/>
                    </span>
             </div>
                     <div className="w-8 h-8">
                         <BiSearch className="w-full h-full"/>
                    </div>
         </div>
        </>
    )
};

const NavMd = () =>{
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/> 
            <input type="search" placeholder="Search for Movies, Events, plays, Sports and Activities" className="w-full bg-transparent border-none focus:outline-none"/>
        </div>
    )
};
const NavLg = () =>{
    return<>
    <div className="container mx-auto px-24 flex items-center justify-between ">
        <div className="flex items-center gap-4 w-1/2">
        <div className="w-40 h-8 ">
            <img src="https://www.pinclipart.com/picdir/big/524-5246520_book-my-show-white-logo-png-clipart.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/> 
            <input type="search" placeholder="Search for Movies, Events, plays, Sports and Activities" className="w-full bg-transparent border-none focus:outline-none"/>
        </div>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-gray-200 text-sm flex items-center hover:text-white cursor-pointer">
                    Mumbai <BiChevronsDown/>
                    </span>
                    <button className="bg-red-500 text-white px-3 py-0.5 text-sm rounded-sm">Sign in</button>
                    <div className="w-8 h-8 text-white cursor-pointer">
                        <BiMenu className="w-full h-full"/>
                    </div>
        </div>
    </div>
    </>;
};


 const Navbar = () => {
     return<>
     <nav className="bg-bms-700 px-4 py-4">
         <div className="md:hidden"> <NavSm/> </div>    

         <div className ="hidden md:flex lg:hidden"> <NavMd/></div>        

         <div className = "hidden lg:flex"><NavLg/></div>    
            </nav>
     </>
 };

 export default Navbar;