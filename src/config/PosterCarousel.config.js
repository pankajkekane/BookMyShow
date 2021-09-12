
    const settings = {
        Infinity:false,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:5,
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

    export default settings;