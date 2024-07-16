import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import iconHandshake from '../../assets/svgs/Frame.svg';
import iconAI from '../../assets/svgs/Group 48095540.svg';
import iconOutsource from '../../assets/svgs/Frame-1.svg';
import { Button, Card } from 'antd';
import arrowRight from '../../assets/svgs/arrow-right-2.svg'
import arrowRightWhite from '../../assets/svgs/arrow-white.svg'

const Feature1LP3 = () => {

    const cardsData = [
        {
            imgSrc: iconOutsource,
            header: "Premium Outsourcing",
            subHeader: "Get access to exceptional talent trained on cutting-edge AI technology.",
            points: ['End-to-end managed customer support',
                'Extensively trained and vetted agents',
                'AI-augmented customer service',
                'Specialized expertise & scalability',
                'Omni-channel support capabilities']
        },
        {
            imgSrc: iconAI,
            header: 'AI-Powered Customer Exp',
            subHeader: <>Cutting-edge AI technology to <br /> enhance your CX team\'s capabilities.</>,
            points: ['Real-time agent assistance',
                'AI-driven knowledge base integration',
                'Sentiment Analysis and intelligent routing',
                'Accent neutralization',
                'AI Noise Reduction']
        },
        {
            imgSrc: iconHandshake,
            header: 'Done For You Customer Support',
            subHeader: 'Experience the magic of effortless customer service implementation.',
            points: ['End-to-end managed customer support',
                'Extensively trained and vetted agents',
                'AI-augmented customer service',
                'Specialized expertise & scalability',
                'Omni-channel support capabilities']
        }
    ]

    const CardElement = ({ imgSrc, header, subHeader, points }) => {
        return (
            <Card className='card'>
                <div className='card-upper'>
                    <img className='upper-img' src={imgSrc} alt={header} width={56} />
                    <h2 className='header'>{header}</h2>
                    <p className='sub-headline'>{subHeader}</p>
                </div>
                <div className='card-lower'>
                    <ul>
                        {points.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Card>
        );
    };


    return (
        <section className='feature-1-LP3-section'>
            <div className='feature-1-LP3'>
                <div className='header-container'>
                    <span className='pre-header'>
                        REVOLUTIONIZING CUSTOMER SUPPORT
                    </span>
                    <h1 className='header'>
                        Hire the <span style={{ color: '#2A71FA' }}>Best Customer Support Team</span> You Didn't Know You Could Afford
                    </h1>
                </div>

                <div className='feature-1-cards-container'>
                    {cardsData.map((card, index) => (
                        <CardElement
                            key={index}
                            imgSrc={card.imgSrc}
                            header={card.header}
                            subHeader={card.subHeader}
                            points={card.points}
                        />
                    ))}
                </div>

                <Button className='book-a-call-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>
                    Book a Call <img className='arrow-icon' src={arrowRight} /><img className='arrow-icon-hover' src={arrowRightWhite} />
                </Button>

                <div className='hr-line'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1242" height="2" viewBox="0 0 1242 2" fill="none">
                        <path d="M0 1L1242 1.00011" stroke="#CDCDCD" />
                    </svg>
                </div>
            </div>

        </section>
    )
}

export default Feature1LP3