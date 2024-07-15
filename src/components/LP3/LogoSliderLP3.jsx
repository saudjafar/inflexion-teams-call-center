import React from 'react';
import Slider from "react-slick";
import logo1 from '../../assets/svgs/accenture_logo.svg.svg';
import logo2 from '../../assets/svgs/ringcentral_logo.svg.svg';
import logo3 from '../../assets/svgs/canva_logo.svg.svg';
import logo4 from '../../assets/svgs/uber_logo.svg.svg';
import logo5 from '../../assets/svgs/taskus_logo.svg.svg';
// import logo6 from '../../assets/svgs/jpmorgan_chase__co_logo.svg.svg';

// const LogoSliderLP3 = () => {
//     const logos = [
//         logo1, logo2, logo3, logo4, logo5
//     ]
//     const settings = {
//         infinite: true,
//         speed: 5000,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         arrows: false,
//         cssEase: 'linear',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ]
//     };

//     const sliderContainerStyle = {
//         cursor: 'pointer',
//         maxWidth: '90%',
//         margin: '0 auto',
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: 'black'
//     };

//     const fadeEffectStyle = {
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         width: '100px', // Adjust the width to your preference
//         zIndex: 1,
//         pointerEvents: 'none' // Ensure the gradient doesn't interfere with the slider interaction
//     };

//     const fadeLeftStyle = {
//         ...fadeEffectStyle,
//         left: 0,
//         background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
//     };

//     const fadeRightStyle = {
//         ...fadeEffectStyle,
//         right: 0,
//         background: 'linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
//     };

//     return (
//         <div className="logo-slider" style={sliderContainerStyle}>
//             <div style={fadeLeftStyle}></div>
//             <Slider {...settings}>
//                 {logos.concat(logos).map((logo, index) => (
//                     <div className="logo-slide" key={index}>
//                         <img src={logo} alt={`Logo ${index}`} />
//                     </div>
//                 ))}
//             </Slider>
//             <div style={fadeRightStyle}></div>
//         </div>
//     );
// };

// export default LogoSliderLP3;

const LogoSliderLP3 = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5
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
        <div className="logo-slider" style={{ cursor: 'pointer', maxWidth: '108rem', margin: '0 auto' }}>
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


export default LogoSliderLP3;
