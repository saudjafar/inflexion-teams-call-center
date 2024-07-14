import React from 'react'
import '../styles/DataManagement/DataManagement.scss';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';
import arrowRight from '../assets/svgs/cta-arrow-white.svg';
import HeroUnderLine1 from '../assets/svgs/Path-3-short.svg'
import HeroUnderLine2 from '../assets/svgs/Path-3.svg'
import bulbIcon from '../assets/svgs/icon-bulb.svg';
import connectDotsIcon from '../assets/svgs/icon-connect-dots.svg';
import shieldIcon from '../assets/svgs/icon-shield.svg';
import { Card } from 'antd';
const DataManagement = () => {

    const dataSupportCardsData = [
        {
            imgSrc: bulbIcon,
            text: 'Identify trends, patterns, and opportunities that drive innovation and profitability'
        },
        {
            imgSrc: connectDotsIcon,
            text: 'Develop data-driven strategies perfectly aligned with your goals'
        },
        {
            imgSrc: shieldIcon,
            text: 'Don\'t lose sleep over security. Our advanced measures and strict compliance are there to safeguard your sensitive data and protect your reputation.'
        }
    ]


    const DataManagementCard = ({ imgSrc, text }) => {
        return (
            <Card className='data-management-card'>
                <img src={imgSrc} alt={'card-image'} className='card-image' />
                <p className='card-text'>{text}</p>
            </Card>
        );
    }

    return (
        <>
            <HeaderWhite />
            <section className='data-management-section'>
                <div className='data-management'>
                    <section className='hero-section'>
                        <div className='hero-headline'>
                            <img src={HeroUnderLine2} className='line-2' />
                            Unlock Insights and Drive Growth
                        </div>
                        <div className='hero-subtext-container'>
                            <p className='hero-subtext'>
                                We handle the complex day-to-day tasks of collecting, storing, securing, and maintaining your data, letting you focus on using insights for better, faster business decisions.
                            </p>
                            <div className='hero-cta-container'>
                                <button className='get-started-cta'>Get Started <img src={arrowRight} /></button>
                                <button className='learn-more-2-cta'>Learn more about us</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className='data-management-cards-section'>
                <div className='header-container'>
                    <h1 className='header'>
                        Elevate Your Data Strategy
                    </h1>
                    <p className='sub-text'>
                        Gain a competitive edge by dedicating more time to actionable insights
                    </p>
                </div>
                <div className='data-management-cards-container'>
                    {dataSupportCardsData.map((card, index) => (
                        <DataManagementCard
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

export default DataManagement