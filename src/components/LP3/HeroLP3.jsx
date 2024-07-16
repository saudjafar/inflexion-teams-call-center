import React from 'react'
import '../../styles/LP3/HeroLP3.scss';
import dotsSVG from '../../assets/svgs/216.light.svg'
import { Button } from 'antd';
import stackSVG from '../../assets/svgs/LP3-stack.svg'
import LogoSliderLP3 from './LogoSliderLP3';
import gridSVG from '../../assets/svgs/LP3-grid.svg'
import LogoSlider from '../LP1/LogoSlider';
import HeroSlider from './HeroSlider';
const HeroLP3 = () => {
    return (
        <section className='hero-LP3-section'>
            <div className='hero-LP3'>
                <img src={dotsSVG} style={{ position: 'absolute', top: '-12rem', zIndex: '1' }} />
                <div className='left'>
                    <span className='pre-header'>
                        SCALABLE, REMOTE CUSTOMER SUPPORT
                    </span>
                    <h1 className='header'>
                        Hire word-class customer support  that costs <span style={{ color: '#2A71FA' }}>70% less</span>
                    </h1>
                    <span className='sub-headline'>
                        We help you build, train, and manage premium customer support teams that deliver 7-star service. Equipped with cutting-edge AI we provide unparalleled CX at a fraction of the cost of onshore hires.
                    </span>

                    <Button className='request-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>Request A Quote</Button>

                </div>
                <div className='right'>
                    {/* <HeroSlider /> */}
                    <img src={stackSVG} />
                </div>
            </div>

            <h1 className='carousel-header'>We’ve hired talent from</h1>

            <LogoSliderLP3 />

            <div className='LP3-gridImg-container'>
                <img src={gridSVG} />
            </div>

        </section>
    )
}

export default HeroLP3