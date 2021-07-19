import React from "react";

export const NextArrow = (props) => {

    return( 
    <>
    <div className={props.className}
         style={{...props.style, backgroundcolor:"black"}}
        onClick={props.onClick} 
        />
    </>
    );
};

export const PrevArrow = (props) => {
    return(
        <>
    <div className={props.className}
         style={{...props.style, backgroundcolor:"black"}}
        onClick={props.onClick}
        />
    </>
    );
};




//props contains -> {classname, styles, onclick} if we want to modify this elements we have to destructure the elements