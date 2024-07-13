import React from 'react'
import '../../styles/LP1/Features.scss';
import { Card } from 'antd';
import iconGlobal from '../../assets/svgs/icon-global.svg';
import iconPrivacy from '../../assets/svgs/icon-privacy.svg';
import iconSecurity from '../../assets/svgs/icon-security.svg';

const Feature1 = () => {
    return (
        <section className='feature-1-section'>
            <div className='headline-subheadline-container'>
                <h1 className='headline'>Seamlessly Extend Your Team’s Capabilities</h1>
                <p className='sub-headline'>Get the precise skills you need, right when you need them. </p>
            </div>
            <div className='feature-cards-container'>
                <Card
                    hoverable
                    className="feature-card"
                >
                    <div className='card-img-container'>
                        <img src={iconSecurity} />
                    </div>
                    <div className='card-text-container'>
                        <h2 className='card-heading'>Boost productivity, cut costs, and stay ahead of the curve.</h2>
                        <p className='card-subtext'>Our innovative mix of AI-driven automation and expert human talent provides you with unmatched flexibility and efficiency, reducing your overhead by up to 70%.</p>
                    </div>
                </Card>
                <Card
                    hoverable
                    className="feature-card"
                >
                    <div className='card-img-container'>
                        <img src={iconPrivacy} />
                    </div>
                    <div className='card-text-container'>
                        <h2 className='card-heading'>Scale without limits.</h2>
                        <p className='card-subtext'>Scale your team up or down effortlessly, from a single specialist to an entire department. We're here when you need us.</p>
                    </div>
                </Card>
                <Card
                    hoverable
                    className="feature-card"
                >
                    <div className='card-img-container'>
                        <img src={iconGlobal} />
                    </div>
                    <div className='card-text-container'>
                        <h2 className='card-heading'>Flexible engagement models.</h2>
                        <p className='card-subtext'>Hourly, project-based, or retainer. Adapt your team to your evolving needs.</p>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default Feature1