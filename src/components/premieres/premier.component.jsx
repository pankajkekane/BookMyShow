import React from 'react'
import Slider from 'react-slick';


// components
import Poster from '../poster/poster.component';


export const Premier = () => {


    const settings = {
        Infinity:false,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:2,
        initialSlide:0,
        responsive:[
            {
            breakpoints: 1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:2,
                infinity:true,
            },
        },
    
        {
            breakpoints: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:1,
            },
        },
    
        {
            breakpoints: 480,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
            
            },
        },
    ],
    
    };


const PremierImages = [
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-myxaqdugrd-portrait.jpg",
        alt: "Godzilla",
        title: "Godzilla vs. Kong",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
        alt: "Rewind",
        title: "Rewind",
        subtitle: "Kannada",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
        alt: "Batman",
        title: "Zack Snyder's Justice Legue",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00138770-kfmhzakdwj-portrait.jpg",
        alt: "Tailgate",
        title: "Tailgate",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301282-dnzbnayacy-portrait.jpg",
        alt: "Kabullywood",
        title: "Kabullywood",
        subtitle: "Farsi",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
        alt: "Proximity",
        title: "Proximity",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-evsmpzefqs-portrait.jpg",
        alt: "The Secrets We Keep",
        title: "The Secrets We Keep",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00308446-jldllpekyw-portrait.jpg",
        alt: "Mortal Kombat",
        title: "Mortal Kombat",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310901-lvctbfwtyb-portrait.jpg",
        alt: "Ammonite",
        title: "Ammonite",
        subtitle: "English",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00077622-ltlsaebkxh-portrait.jpg",
        alt: "Wonder Women 1984",
        title: "Wonder Women 1984",
        subtitle: "English",
    }
]

    return (
        <>
           <Slider {...settings}>
               {PremierImages.map((image) =>(
                   <Poster {...image}/>
               ))}
           </Slider>
        </>
    )
}

export default Premier;