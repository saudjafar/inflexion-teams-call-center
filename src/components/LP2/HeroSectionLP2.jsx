import React from 'react'
import '../../styles/LP2/HeroSectionLP2.scss';
import arrowRight from '../../assets/svgs/arrow-right.svg';
import imgLeft from '../../assets/imgs/LP2-Hero1.png';
import imgRight from '../../assets/imgs/LP2-Hero2.png';

const HeroSectionLP2 = () => {
    return (
        <section className='hero-section-container'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.41rem', alignItems: 'center' }}>
                <div className='header-container'>
                    <h1 className='line line-1'>Outsource 7-star support</h1>
                    <h1 className='line line-2'>for way cheaper than you thought</h1>
                </div>
                <div className='sub-headline-container'>
                    <p className='sub-headline'>
                        Top talent at lower cost. Put an end to staffing challenges for good with a custom-built team tailored to your needs.
                    </p>
                </div>
                <button className='get-started-cta'>Get Started <img src={arrowRight} /></button>
            </div>
            <div className='hero-img-container'>
                <img src={imgLeft} className='img-left' width={848.32} height={871.36} />
                <img src={imgRight} className='img-right' width={848.32} height={871.36} />
            </div>
        </section>

    )
}

export default HeroSectionLP2