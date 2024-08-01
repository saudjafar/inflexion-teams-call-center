import React from 'react';
import Slider from "react-slick";
import logo1 from '../../assets/svgs/icon-google.svg';
import logo2 from '../../assets/svgs/icon-tiktok.svg';
import logo3 from '../../assets/svgs/accenture_logo.svg.svg';
import logo4 from '../../assets/svgs/uber_logo.svg.svg';
import './statsMiniSlider.scss';

const StatsMiniSlider = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4
    ]
    const settings = {
        infinite: true,
        speed: 9000,
        slidesToShow: 2,
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
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        maxWidth: '90%',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#030303',
    };



    const logoSlideStyle = {
        maxWidth: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
    };

    const logoImgContainerStyle = {
        maxWidth: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0.5rem',
    };

    return (
        <div className="logo-slider" style={sliderContainerStyle}>
            <Slider {...settings}>
                {logos.concat(logos).map((logo, index) => (
                    <div className="logo-slide" key={index} style={logoSlideStyle}>
                        <div className='logo-img-container' style={logoImgContainerStyle}>
                            <img src={logo} alt={`Logo ${index}`} style={{ scale: '0.75' }} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default StatsMiniSlider;