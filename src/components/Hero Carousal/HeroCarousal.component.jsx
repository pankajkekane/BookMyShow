import React from "react";
import HeroSlider from "react-slick";

//css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const HeroCarousal = () => {

    const settings = {
        arrows: true,
        centermode:true,
        centerpadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const images = ["https://in.bmscdn.com/promotions/cms/creatives/1626504090321_misbehaviour_1280x500_17jul_ios.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626086157424_diyartcraftliveworkshopforsunfeastyippee_webshowcase_1280x500_revised.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626372139417_bsm_1280x500_chickflick_2.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg"
    ];

return (
<>
<HeroSlider {...settings}>
{images.map((image) => ( 
    <div className="w-20 h-80">
        <img src={image} alt="testing" className="w-full h-full"/>
    </div>))}

</HeroSlider>
</>
)
}

export default HeroCarousal;