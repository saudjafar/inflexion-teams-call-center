import React from 'react'
import { Card } from 'antd';
import '../styles/Testimonials.scss'
import iconQuote from '../assets/svgs/ic-quote.svg'
import fiveStars from '../assets/svgs/five-stars.svg'
import user1 from '../assets/imgs/user1.jpg';
import user2 from '../assets/imgs/user2.jpg';
import user3 from '../assets/imgs/user3.jpg';
const Testimonials = () => {
    return (
        <section className='testimonials-section'>
            <div className='testimonials'>
                <h1 className='testimonals-header'>Testimonials</h1>
                <div className='testimonial-cards-container'>
                    <Card
                        className='testimonial-card'
                    >
                        <div className='card-img-container'><img src={iconQuote} alt='open-quotes' /></div>
                        <div className='card-text-container'>
                            <h2 className='card-heading'>Great work!</h2>
                            <p className='card-subtext'>
                                Great workflow and great onboarding.
                                Highly recommend Satoshi for Saas
                                Companies.
                            </p>
                            <img className='star-rating' src={fiveStars} alt='rating' width={107.2} height={57.92} />
                        </div>

                        <div className='user-details-container'>
                            <img className='user-img' src={user1} alt='user-img' width={45} height={45} />
                            <div className='user-text'>
                                <span className='name'>Marcus B</span>
                                <span className='designation'>Design Director at Shogun</span>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className='testimonial-card'
                    >
                        <div className='card-img-container'><img src={iconQuote} alt='open-quotes' /></div>
                        <div className='card-text-container'>
                            <h2 className='card-heading'>Absolutely Superb!</h2>
                            <p className='card-subtext'>
                                This is unbelievable. After using
                                Satoshi Template my business
                                skyrocketed!
                            </p>
                            <img className='star-rating' src={fiveStars} alt='rating' width={107.2} height={57.92} />
                        </div>

                        <div className='user-details-container'>
                            <img className='user-img' src={user2} alt='user-img' width={45} height={45} />
                            <div className='user-text'>
                                <span className='name'>Lindsay L</span>
                                <span className='designation'>Design Director at Connor</span>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className='testimonial-card'
                    >
                        <div className='card-img-container'><img src={iconQuote} alt='open-quotes' /></div>
                        <div className='card-text-container'>
                            <h2 className='card-heading'>Absolutely Superb!</h2>
                            <p className='card-subtext'>
                                Consectetur adipiscing elit.
                                Suspendisse varius enim in eros
                                elementum tristique. Duis cursus
                            </p>
                            <img className='star-rating' src={fiveStars} alt='rating' width={107.2} height={57.92} />
                        </div>

                        <div className='user-details-container'>
                            <img className='user-img' src={user3} alt='user-img' width={45} height={45} />
                            <div className='user-text'>
                                <span className='name'>Mary L</span>
                                <span className='designation'>Design Director at Belfort</span>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    )
}

export default Testimonials