import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import iconHandshake from '../../assets/svgs/Frame.svg';
import iconAI from '../../assets/svgs/Group 48095540.svg';
import iconOutsource from '../../assets/svgs/Frame-1.svg';
import { Card } from 'antd';
const Feature1LP3 = () => {

    const cardsData = [
        {
            imgSrc: iconOutsource,
            header: 'Premium Outsourcing',
            subHeader: 'Get access to exceptional talent trained on cutting-edge AI technology.',
            points: ['End-to-end managed customer support',
                'Extensively trained and vetted agents',
                'AI-augmented customer service',
                'Specialized expertise & scalability',
                'Omni-channel support capabilities']
        },
        {
            imgSrc: iconAI,
            header: 'AI-Powered Customer Exp',
            subHeader: 'Cutting-edge AI technology to enhance your CX team\'s capabilities.',
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
                <ul>
                    {points?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
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
                    {cardsData.map((index, card) => (
                        <CardElement
                            key={index}
                            imgSrc={card.imgSrc}
                            header={card.header}
                            subHeader={card.subHeader}
                            points={card.points}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Feature1LP3