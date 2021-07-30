import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class MainCarousel extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // autoplay: true,
            lazyLoad: true
        }
        return (
            <div>
                <Slider {...settings} className="container-carousel">
                    <div><img className="w-100 h-100" src="/assets/images/carousel-img.png" alt="" /></div>
                    <div><img className="w-100 h-100" src="/assets/images/carousel-img.png" alt="" /></div>
                    <div><img className="w-100 h-100" src="/assets/images/carousel-img.png" alt="" /></div>
                    <div><img className="w-100 h-100" src="/assets/images/carousel-img.png" alt="" /></div>
                </Slider>
                
                <div className="carousel-content">
                    <img src="/assets/images/logopid.png" alt="" />
                    <p>
                        O`ZBEKISTON RESPUBLIKASI
                        "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI
                        "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
                    </p>
                </div>
            </div>
        )
    }
}


export default MainCarousel;
