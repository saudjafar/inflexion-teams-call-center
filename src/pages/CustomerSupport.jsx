import React from 'react'
import '../styles/CustomerSupport/CustomerSupport.scss';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';
import arrowRight from '../assets/svgs/cta-arrow-white.svg';
import HeroUnderLine1 from '../assets/svgs/Path-3-short.svg'
import HeroUnderLine2 from '../assets/svgs/Path-3.svg'
import quillIcon from '../assets/svgs/quill.svg';
import targetIcon from '../assets/svgs/target.svg';
import connectIcon from '../assets/svgs/icon-connect.svg';
import section3Img from '../assets/imgs/short-break-send-few-messages.png';
import { Card } from 'antd';

const CustomerSupport = () => {
    const advantageCardsData = [
        {
            imgSrc: quillIcon,
            text: 'Rigorous screening and skills assessments'
        },
        {
            imgSrc: targetIcon,
            text: 'Immersive, role-specific training to drive proficiency from day one'
        },
        {
            imgSrc: connectIcon,
            text: 'Ongoing coaching and development to maximize tenure and performance'
        }
    ]

    const AdvantageCard = ({ imgSrc, text }) => {
        return (
            <Card className='advantage-card'>
                <img src={imgSrc} alt={'card-image'} className='card-image' />
                <p className='card-text'>{text}</p>
            </Card>
        );
    };

    return (
        <>
            <HeaderWhite />

            <section className='customer-support-section'>
                <div className='customer-support'>
                    <section className='hero-section'>
                        <div className='hero-headline'>
                            <img src={HeroUnderLine1} className='line-1' />
                            <img src={HeroUnderLine2} className='line-2' />
                            Go from Zero to Full-Service Customer Care in Two Short Weeks
                        </div>
                        <div className='hero-subtext-container'>
                            <p className='hero-subtext'>
                                Our proven process delivers top talent that sticks around. Expect best-in-class CSAT and NPS from agents hired through our proprietary framework, refined over years of CX leadership.
                            </p>

                            <div className='hero-cta-container'>
                                <button className='get-started-cta'>Get Started <img src={arrowRight} /></button>
                                <button className='learn-more-2-cta'>Learn more about us</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className='inflexion-advantage-section'>
                <div className='inflexion-advantage'>
                    <h1 className='advantage-header'>
                        The Inflexion Advantage
                    </h1>
                    <div className='advantage-cards-container'>
                        {advantageCardsData.map((card, index) => (
                            <AdvantageCard
                                key={index}
                                imgSrc={card.imgSrc}
                                text={card.text}
                            />
                        ))
                        }

                    </div>
                </div>
            </section>

            <section className='customer-support-section-3'>
                <div className='customer-support-3'>
                    <img className='left-image' src={section3Img} />
                    <div className='text-container'>
                        <h2 className='heading'>We're here to grow with you</h2>
                        <p className='subtext'>Say goodbye to restrictive contracts and rigid agent requirements. We recognize that support needs are fluid, evolving from month to month. That's why we offer unparalleled flexibility, seamlessly scaling our services to align with your demands.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CustomerSupport