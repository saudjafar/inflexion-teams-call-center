import React from 'react';
import Slider from "react-slick";
import logo1 from '../../assets/svgs/icon-google.svg';
import logo2 from '../../assets/svgs/icon-tiktok.svg';
import logo3 from '../../assets/svgs/accenture_logo.svg.svg';
import logo4 from '../../assets/svgs/uber_logo.svg.svg';
//BROKEN
const HireSupportLogoSlider = () => {
    const logos = [
        logo1, logo2, logo3, logo4
    ]
    const settings = {
        infinite: true,
        speed: 9000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        // draggable: false,
        pointerEvents: false,
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

    const sliderContainerStyle = {
        cursor: 'pointer',
        maxWidth: '100%',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#030303',
    };



    return (
        <div className="logo-slider" style={sliderContainerStyle}>
            <Slider {...settings}>
                {logos.concat(logos).map((logo, index) => (
                    <div className="logo-slide" key={index} >
                        <div className='logo-img-container' style={{ display: 'flex', height: '44px', alignItems: 'center' }}>
                            <img src={logo} alt={`Logo ${index}`} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HireSupportLogoSlider;