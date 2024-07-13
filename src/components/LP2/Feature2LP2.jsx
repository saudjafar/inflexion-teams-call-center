import React from 'react'
import '../../styles/LP2/FeaturesLP2.scss';
import CompanyIcons from '../../assets/svgs/LP2-3x3-icons.svg';
import arrowRight from '../../assets/svgs/cta-arrow-white.svg';

const Feature2LP2 = () => {
    return (
        <section className='feature-2-LP2-section'>
            <div className='left'>
                <img src={CompanyIcons} alt='user-icons' style={{ maxWidth: '100%', height: 'auto' }} />
            </div>

            <div className='right'>
                <h1 className='headline'>
                    Effortless Integration, Exceptional Results
                </h1>
                <p className='sub-headline'>
                    Our agents work as an extension of your team. We pair world-class service with transparency, enabling you to deliver exceptional, personalized interactions at every touchpoint.
                </p>
                <button className='get-started-cta'>Get Started <img src={arrowRight} /></button>
            </div>
        </section>
    )
}

export default Feature2LP2