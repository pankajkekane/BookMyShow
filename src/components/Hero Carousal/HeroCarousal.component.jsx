import React from "react";
import HeroSlider from "react-slick";

//comonent
import { NextArrow, PrevArrow } from "./Arrows.component";




const HeroCarousal = () => {
    const settingsLG = { 
        arrows:true,
         autoplay:true, 
         centermode:true, 
         centerpadding:"300px", 
         slidesToShow: 2, 
         infinite: true, 
         slidesToScroll: 1, 
         nextArrow:<NextArrow />, 
         prevArrow:<PrevArrow />,
        };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const images = ["https://in.bmscdn.com/promotions/cms/creatives/1626504090321_misbehaviour_1280x500_17jul_ios.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626086157424_diyartcraftliveworkshopforsunfeastyippee_webshowcase_1280x500_revised.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626372139417_bsm_1280x500_chickflick_2.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
    "https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-upgrad-online-courses-education-programs-1-2021-6-7-t-16-33-12.jpg"
    ];

return (
<>
<div className="lg:hidden">
<HeroSlider {...settings}>
{images.map((image) => ( 
    <div className="w-full h-44 md:h-64 py-3">
        <img src={image} alt="testing" className="w-full h-full"/>
    </div>))}

</HeroSlider>
</div>

<div className="hidden lg:block">
<HeroSlider {...settingsLG}>
{images.map((image) => ( 
    <div className="w-full h-96 px-2 py-3">
        <img src={image} alt="testing" className="w-full h-full"/>
    </div>))}

</HeroSlider>
</div>
</>
)
}

export default HeroCarousal;