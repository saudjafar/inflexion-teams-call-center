import React from 'react'
import '../styles/TechnicalSupport/TechnicalSupport.scss';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';
import arrowRight from '../assets/svgs/cta-arrow-white.svg';
import HeroUnderLine1 from '../assets/svgs/Path-3-short.svg'
import HeroUnderLine2 from '../assets/svgs/Path-3.svg'
import handshakeIcon from '../assets/svgs/handshake.svg';
import gearIcon from '../assets/svgs/gear.svg';
import leaderIcon from '../assets/svgs/party-leader.svg';
import { Card } from 'antd';
const TechnicalSupport = () => {
    const techSupportCardsData = [
        {
            imgSrc: handshakeIcon,
            text: 'Whether you\'re a fast-growing SaaS startup, an innovative Fintech firm, a pioneering HealthTech company, we’ve got you covered.'
        },
        {
            imgSrc: gearIcon,
            text: 'Augment your existing IT team with our pool of certified specialists, equipped with the latest tools and technologies.'
        },
        {
            imgSrc: leaderIcon,
            text: 'Our dedicated team leads provide regular management and continuous feedback to ensure peak performance from every agent.'
        }
    ]


    const TechSupportCard = ({ imgSrc, text }) => {
        return (
            <Card className='tech-support-card'>
                <img src={imgSrc} alt={'card-image'} className='card-image' />
                <p className='card-text'>{text}</p>
            </Card>
        );
    }

    return (
        <>
            <HeaderWhite />
            <section className='technical-support-section'>
                <div className='technical-support'>
                    <section className='hero-section'>
                        <div className='hero-headline'>
                            <img src={HeroUnderLine2} className='line-2' />
                            End-to-End Technical Support Solutions
                        </div>
                        <div className='hero-subtext-container'>
                            <p className='hero-subtext'>
                                Our expert technical support team provides comprehensive support services for all your IT needs, from L1 to L3.
                            </p>

                            <div className='hero-cta-container'>
                                <button className='get-started-cta'>Get Started <img src={arrowRight} /></button>
                                <button className='learn-more-2-cta'>Learn more about us</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className='tech-support-cards-section'>
                <div className='tech-support-cards-container'>
                    {techSupportCardsData.map((card, index) => (
                        <TechSupportCard
                            key={index}
                            imgSrc={card.imgSrc}
                            text={card.text}
                        />
                    ))
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TechnicalSupport