import React from 'react';
import '../../styles/LP3/HeroLP3.scss';
import { useSpring, animated } from 'react-spring';
import dotsSVG from '../../assets/svgs/216.light.svg';
import { Button } from 'antd';
import LogoSliderLP3 from './LogoSliderLP3';
import gridSVG from '../../assets/svgs/LP3-grid.svg';
import HeroSlider from './HeroSlider';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"


const HeroLP3 = () => {
    const leftAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 400 },
    });

    const rightAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 600 },
    });

    return (
        <section className='hero-LP3-section'>
            <div className='hero-LP3'>
                <img src={dotsSVG} style={{ position: 'absolute', top: '-12rem', zIndex: '1' }} />

                <animated.div style={leftAnimation} className='left'>
                    <span className='pre-header'>
                        SCALABLE, REMOTE CUSTOMER SUPPORT
                    </span>
                    <h1 className='header'>
                        Hire word-class customer support that costs <span style={{ color: '#2A71FA' }}>70% less</span>
                    </h1>
                    <span className='sub-headline'>
                        We help you build, train, and manage premium customer support teams that deliver 7-star service. Equipped with cutting-edge AI we provide unparalleled CX at a fraction of the cost of onshore hires.
                    </span>

                    <Button className='request-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>Request A Quote</Button>
                </animated.div>

                <animated.div style={rightAnimation} className='right'>
                    <HeroSlider />
                </animated.div>
            </div>

            <>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <h1 className='carousel-header'>We’ve hired talent from</h1>
                    <LogoSliderLP3 />
                </ScrollAnimation>
                <div className='LP3-gridSVG-container'>
                    <img src={gridSVG} />
                </div>
            </>
        </section>
    );
};

export default HeroLP3;
