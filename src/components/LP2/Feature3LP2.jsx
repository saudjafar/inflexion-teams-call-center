import React from 'react'
import '../../styles/LP2/FeaturesLP2.scss';
import img1 from '../../assets/imgs/LP2-F3-1.png';
import img2 from '../../assets/imgs/LP2-F3-2.png';
import img3 from '../../assets/imgs/LP2-F3-3.png';
import { Card } from 'antd';

const cardData = [
    {
        heading: "Get Started in Weeks",
        subtext: "Transform your customer service into the gold standard of your industry in record time.",
        cardImg: img1,
    },
    {
        heading: "Uninterrupted Support, 24/7/365",
        subtext: "Never stress over agent absences again. We cross-train a deep bench of agents specifically for your brand, ready to jump in at a moment's notice.",
        cardImg: img2,
    },
    {
        heading: "Retention That Defies Industry Norms",
        subtext: "Our talent retention rate of 95%+ is unparalleled. We guarantee consistent quality and accelerated project timelines.",
        cardImg: img3,
    }
];

const CardElement = ({ heading, subtext, cardImg }) => {
    return (
        <Card className='card'>
            <img src={cardImg} alt={'card-image'} className='card-image' />
            <div className='card-text-container'>
                <h2 className='card-heading'>{heading}</h2>
                <p className='card-subtext'>{subtext}</p>
            </div>
        </Card>
    );
};


const Feature3LP2 = () => {
    return (
        <section className='feature-3-LP2-section'>
            <div className='cards-container'>
                {cardData.map((card, index) => (
                    <CardElement
                        key={index}
                        heading={card.heading}
                        subtext={card.subtext}
                        cardImg={card.cardImg}
                    />
                ))}
            </div>
        </section>
    )
}

export default Feature3LP2