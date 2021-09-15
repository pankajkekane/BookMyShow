import React from 'react'
import Slider from 'react-slick';

//component
import Poster from '../poster/poster.component';



//configs
import premiercomponentsettings from '../../config/PosterCarousel.config';



export const PosterSlider = (props) => {
    return (
        <>
        <div className="flex flex-col items-start my-2">
            <h3 className={' text-2xl font-bold ${props.isDark ? "text-white" : "text-grey-700"}'}>{props.title}</h3>
            <p className={' text-sm ${props.isDark ? "text-white" : "text-grey-700"}'}>{props.subtitle}</p>
        </div>
           <Slider {... premiercomponentsettings}>
               {props.images.map((image) =>(
                   <Poster {...image} isDark={props.isDark} />
               ))}
           </Slider>
        </>
    )
}

export default PosterSlider;