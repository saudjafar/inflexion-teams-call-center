import React from 'react';
import Slider from "react-slick";
import logo1 from '../../assets/svgs/2036.svg';
import logo2 from '../../assets/svgs/2038.svg';
import logo3 from '../../assets/svgs/2039.svg';
import logo4 from '../../assets/svgs/2040.svg';
import logo5 from '../../assets/svgs/2041.svg';
import logo6 from '../../assets/svgs/2042.svg';

const LogoSlider = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6
    ]
    const settings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="logo-slider" style={{ cursor: 'pointer', maxWidth: '78rem', margin: '0 auto' }}>
            <Slider {...settings}>
                {logos.concat(logos).map((logo, index) => (
                    <div className="logo-slide" key={index}>
                        <img src={logo} alt={`Logo ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default LogoSlider;
