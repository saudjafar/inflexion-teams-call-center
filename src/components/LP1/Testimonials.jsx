import React from 'react'
import { Card } from 'antd';
import '../../styles/LP1/Testimonials.scss'
import iconQuote from '../../assets/svgs/ic-quote.svg'
import fiveStars from '../../assets/svgs/five-stars.svg'
import user1 from '../../assets/imgs/user1.jpg';
import user2 from '../../assets/imgs/user2.jpg';
import user3 from '../../assets/imgs/user3.jpg';

const testimonialsData = [
    {
        heading: "Great work!",
        subtext: "Great workflow and great onboarding. Highly recommend Satoshi for Saas Companies.",
        userImg: user1,
        userName: "Marcus B",
        userDesignation: "Design Director at Shogun"
    },
    {
        heading: "Absolutely Superb!",
        subtext: "This is unbelievable. After using Satoshi Template my business skyrocketed!",
        userImg: user2,
        userName: "Lindsay L",
        userDesignation: "Design Director at Connor"
    },
    {
        heading: "Absolutely Superb!",
        subtext: "Consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus",
        userImg: user3,
        userName: "Mary L",
        userDesignation: "Design Director at Belfort"
    }
];

const TestimonialCard = ({ quoteIcon, heading, subtext, ratingImg, userImg, userName, userDesignation }) => {
    return (
        <Card className='testimonial-card'>
            <div className='card-img-container'><img src={quoteIcon} alt='open-quotes' /></div>
            <div className='card-text-container'>
                <h2 className='card-heading'>{heading}</h2>
                <p className='card-subtext'>{subtext}</p>
                <img className='star-rating' src={ratingImg} alt='rating' width={107.2} height={57.92} />
            </div>
            <div className='user-details-container'>
                <img className='user-img' src={userImg} alt='user-img' width={45} height={45} />
                <div className='user-text'>
                    <span className='name'>{userName}</span>
                    <span className='designation'>{userDesignation}</span>
                </div>
            </div>
        </Card>
    );
};

const Testimonials = () => {
    return (
        <section className='testimonials-section'>
            <div className='testimonials'>
                <h1 className='testimonals-header'>Testimonials</h1>
                <div className='testimonial-cards-container'>
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quoteIcon={iconQuote}
                            heading={testimonial.heading}
                            subtext={testimonial.subtext}
                            ratingImg={fiveStars}
                            userImg={testimonial.userImg}
                            userName={testimonial.userName}
                            userDesignation={testimonial.userDesignation}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials