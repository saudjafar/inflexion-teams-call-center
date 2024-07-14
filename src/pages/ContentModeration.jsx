import React from 'react'
import '../styles/ContentModeration/ContentModeration.scss'
import HeaderWhite from '../components/HeaderWhite'
import Footer from '../components/Footer'
import HeroUnderLine2 from '../assets/svgs/path-4.svg'
import HeroUnderLine1 from '../assets/svgs/path-5.svg'
import arrowRight from '../assets/svgs/cta-arrow-white.svg';

const ContentModeration = () => {
    return (
        <>
            <HeaderWhite />
            <section className='content-moderation-section'>
                <div className='content-moderation'>
                    <section className='hero-section'>
                        <div className='hero-headline'>
                            <img src={HeroUnderLine1} className='line-1' />
                            <img src={HeroUnderLine2} className='line-2' />
                            Keep Your Brand Strong and Your User Communities Safe
                        </div>
                        <div className='hero-subtext-container'>
                            <p className='hero-subtext'>
                                We’re here to help you foster safe, positive interactions while looking after your brand's reputation as your digital community grows.
                            </p>

                            <div className='hero-cta-container'>
                                <button className='get-started-cta'>Get Started <img src={arrowRight} /></button>
                                <button className='learn-more-2-cta'>Learn more about us</button>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default ContentModeration