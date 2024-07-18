import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
// import { EffectCards } from "swiper";
import { Autoplay, EffectCards } from "swiper/modules";

import styled from "styled-components";
import sliderImg1 from '../../assets/imgs/hero-slider1.png';
import sliderImg2 from '../../assets/imgs/hero-slider2.png';
import sliderImg3 from '../../assets/imgs/hero-slider3.png';
import sliderImg4 from '../../assets/imgs/hero-slider4.png';


// Styled Components
const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  position: relative;
    
`;

const Heading = styled.h2`
  padding-top: 3rem;
  text-align: center;
`;

// 450x677
const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 450px; 
  height: 677px;

  .swiper-slide {
    border-radius: 18px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 18px;
    }
  }
`;

// React Component
const SwiperComponent = () => {
    const images = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

    return (
        <Container className="swiper-parent-container">
            <StyledSwiper
                modules={[EffectCards, Autoplay]}
                effect="cards"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,  // Delay between transitions (in ms). Adjust as needed.
                    disableOnInteraction: false  // Continue autoplay after interaction.
                }}
            >
                {images.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <img src={imgSrc} alt={`Slide Image ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </Container>
    );
};

export default SwiperComponent;
