import React from 'react'
import Slider from 'react-slick';

//component
import Poster from '../poster/poster.component';



//configs
import premiercomponentsettings from '../../config/PosterCarousel.config';



export const PosterSlider = (props) => {
    return (
                    <>
        <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-bold">{props.title}</h3>
            <p className="text-white text-sm">{props.subtitle}</p>
        </div>
           <Slider {... premiercomponentsettings}>
               {props.images.map((image) =>(
                   <Poster {...image} isDark />
               ))}
           </Slider>
        </>
    )
}

export default PosterSlider;