import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import F3L from '../../assets/svgs/LP3F3Dots-left.svg';
import F3R from '../../assets/svgs/LP3F3Dots-right.svg';
import iconRep from '../../assets/svgs/icon-rep-lp3.svg';
import iconGlobe from '../../assets/svgs/icon-globe-lp3.svg';
import iconHandshake from '../../assets/svgs/icon-handshake-lp3.svg';
import iconHeadphone from '../../assets/svgs/icon-headfone-lp3.svg';
import iconMail from '../../assets/svgs/icon-mail-lp3.svg';
import iconMessage from '../../assets/svgs/icon-message-lp3.svg';
import arrowBlue from '../../assets/svgs/arrow-blue.svg';
import { Card } from 'antd';

const Feature3LP3 = () => {

    const F3LP3CardData = [
        {
            imgSrc: iconRep,
            header: 'Customer Service',
            subtext: 'Handle refunds, product inquiries, demos, and general customer care.',
        },
        {
            imgSrc: iconMessage,
            header: 'Live Chat Support',
            subtext: 'Provide real-time assistance to customers through live messaging.',
        },
        {
            imgSrc: iconMail,
            header: 'Email Support',
            subtext: 'Respond to inbound customer inquiries & resolve issues through email.',
        },
        {
            imgSrc: iconGlobe,
            header: 'Social Media Support',
            subtext: 'Engage with customers &address concerns on various social media platforms.',
        },
        {
            imgSrc: iconHeadphone,
            header: 'Phone Support',
            subtext: 'Deliver personalized voice-based customer service for a range of inquiries.',
        },
        {
            imgSrc: iconHandshake,
            header: 'Help Desk Support',
            subtext: 'Offer first-line technical and non-technical problem-solving for customers.',
        },
    ]
    const F3LP3Card = ({ imgSrc, header, subtext }) => {
        return (
            <Card className='card' hoverable style={{ border: 'none' }}>
                <div className='card-content'>
                    <img src={imgSrc} alt={header} className='card-image' />
                    <h2 className='card-header'>{header}</h2>
                    <p className='card-subtext'>{subtext}</p>
                    <span className='explore-cta'>Explore This Role <img src={arrowBlue} /></span>
                </div>
            </Card>
        );
    };

    return (
        <section className='feature-3-LP3-section'>
            <div className='feature-3-LP3'>
                <div className='dots-svg-container'>
                    <img src={F3L} />
                    <img src={F3R} />
                </div>
                <div className='header-container'>

                    <h1 className='header'>
                        Outsource Your <span style={{ color: '#2A71FA' }}>Customer Support</span> Across Functions
                    </h1>
                    <p className='sub-header'>
                        We build premium customer support teams for any CX function, leveraging cutting-edge AI technology and extensively trained agents to deliver exceptional service.
                    </p>
                </div>
                <div className='feature-3-cards-container'>
                    <div className='feature-3-row feature-3-row-top'>
                        {F3LP3CardData.slice(0, 3).map((card, index) => (
                            <F3LP3Card
                                key={index}
                                imgSrc={card.imgSrc}
                                header={card.header}
                                subtext={card.subtext}
                            />
                        ))}
                    </div>
                    <hr className='feature-3-divider' />
                    <div className='feature-3-row feature-3-row-bottom'>
                        {F3LP3CardData.slice(3).map((card, index) => (
                            <F3LP3Card
                                key={index}
                                imgSrc={card.imgSrc}
                                header={card.header}
                                subtext={card.subtext}
                            />
                        ))}
                    </div>
                </div>
                {/* <div className='feature-3-cards-container'>
                    {F3LP3CardData.map((card, index) => (
                        <F3LP3Card
                            key={index}
                            imgSrc={card.imgSrc}
                            header={card.header}
                            subtext={card.subtext}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default Feature3LP3