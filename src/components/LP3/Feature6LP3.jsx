import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import iconRepBlue from '../../assets/svgs/icon-rep-blue.svg';
import iconWand from '../../assets/svgs/icon-wand.svg';
import iconCert from '../../assets/svgs/icon-cert.svg';
import iconBadge from '../../assets/svgs/icon-badge.svg';
import iconClock from '../../assets/svgs/icon-clock.svg';
import iconPPT from '../../assets/svgs/icon-ppt.svg';
import arrowBlack from '../../assets/svgs/arrow-black-F4LP3.svg';
import { Card } from 'antd';
const Feature6LP3 = () => {
    const F6LP3CardData = [
        {
            imgSrc: iconRepBlue,
            header: 'Customer Support Excellence',
            subtext: 'Enhance your customer service with our trained agents and AI solutions.',
        },
        {
            imgSrc: iconWand,
            header: 'AI-Enhanced Operations',
            subtext: 'Leverage AI to streamline workflows, reduce handling times, and boost first-call resolution rates.',
        },
        {
            imgSrc: iconCert,
            header: 'Quality-First Outsourcing',
            subtext: 'Experience the blend of human empathy and technological efficiency, setting a new standard in customer care.',
        },
        {
            imgSrc: iconBadge,
            header: 'Affordable Premium Service',
            subtext: 'Access top-tier talent and AI tools at economical rates, making exceptional customer service accessible to all.',
        },
        {
            imgSrc: iconClock,
            header: '24/7 Global Coverage',
            subtext: 'Ensure round-the-clock support for your customers with our diverse, remote team spanning multiple time zones.',
        },
        {
            imgSrc: iconPPT,
            header: 'Scalability and Flexibility',
            subtext: 'Efficiently Scale your customer support team efficiently for SaaS, e-commerce, or startups.',
        },
    ]
    const F6LP3Card = ({ imgSrc, header, subtext }) => {
        return (
            <Card className='card' hoverable style={{ border: 'none' }}>
                <div className='card-content'>
                    <img src={imgSrc} alt={header} className='card-image' />
                    <h2 className='card-header'>{header}</h2>
                    <p className='card-subtext'>{subtext}</p>
                </div>
            </Card>
        );
    };
    return (
        <section className='feature-6-LP3-section'>
            <div className='feature-6-LP3'>
                <div className='header-container'>
                    <span className='pre-header'>
                        Global Talent With AI
                    </span>
                    <h1 className='header'>
                        Premium Customer Support <br /> for Any Company Size
                    </h1>
                </div>
                <div className='feature-6-cards-container'>
                    {F6LP3CardData.map((card, index) => (
                        <F6LP3Card
                            key={index}
                            imgSrc={card.imgSrc}
                            header={card.header}
                            subtext={card.subtext}
                        />
                    ))}
                </div>
                <div style={{ margin: '0 auto' }}>
                    <button className='book-a-call-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>
                        Book a Call <img src={arrowBlack} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Feature6LP3