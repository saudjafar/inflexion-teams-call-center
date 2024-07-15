import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import toprightF5LP3 from '../../assets/svgs/top-right-F5Lp3.svg';
import arrowRight from '../../assets/svgs/arrow-white.svg';
const Feature5LP3 = () => {
    return (
        <section className='feature-5-LP3-section'>
            <div className='feature-5-LP3'>

                <div className='top'>
                    <div className='left'>
                        <h1 className='header'>
                            We <span style={{ color: '#2A71FA' }}>Simplify CX</span> for Businesses To Scale
                        </h1>
                        <p className='subtext'>
                            Trying to build and manage customer support in-house can be costly to a company. We provide you with premium outsourced customer service teams and cutting-edge AI technology, so you can focus on growing your business.
                        </p>
                    </div>
                    <div className='right'>
                        <img src={toprightF5LP3} />
                    </div>
                </div>

                <div className='hr-divider' />

                <div className='bottom'>
                    <span className='pre-header'>HOW WE WORK</span>
                    <h1 className='header'>Simplicity as a Service</h1>
                    <p className='subtext'>Think of us as an extension of your customer support function, providing end-to-end managed services that drive growth and CSAT. We integrate directly into your team to help you integrate AI, improve workflows, and deliver 7-star customer service at an affordable price.</p>
                    <button className='how-we-work-cta'>See How We Work <img src={arrowRight} /></button>
                </div>
            </div>
        </section>
    )
}

export default Feature5LP3