import React from 'react'
import '../../styles/LP1/HeroSection.scss';
import HeroImgMasked from '../../assets/imgs/hero-section-masked.png'
import LogoSlider from './LogoSlider';
const HeroSection = () => {
    return (
        <section className='hero-section-container'>
            <div className='hero-section'>
                <div className='left'>
                    <h1 className='headline'>Outsource customer support so good it feels unfair</h1>
                    <p className='sub-headline'>Top talent at lower cost. Put an end to staffing challenges for good with a custom-built team tailored to your needs.</p>
                    <button className='lets-talk-cta'>
                        Let's Talk
                    </button>
                </div>

                <div className='right'>
                    <img src={HeroImgMasked} alt='hero-section-image' style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
            <div className='companies-carousel-container'>
                <LogoSlider />
            </div>
        </section>

    )
}

export default HeroSection