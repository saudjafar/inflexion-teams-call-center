import React from 'react'
import '../styles/BackOffice/BackOffice.scss';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';
import HeroUnderLine1 from '../assets/svgs/Path-3.svg'
import arrowRight from '../assets/svgs/cta-arrow-white.svg';


const BackOffice = () => {
    return (
        <>
            <HeaderWhite />
            <section className='back-office-section'>
                <div className='back-office'>
                    <section className='hero-section'>
                        <div className='hero-headline'>
                            <img src={HeroUnderLine1} className='line-1' />
                            Streamlined Admin =<br /> More Money in Your Pocket
                        </div>
                        <div className='hero-subtext-container'>
                            <p className='hero-subtext'>
                                Our Agents Handle the Back Office So You Can Focus on Growth
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

export default BackOffice