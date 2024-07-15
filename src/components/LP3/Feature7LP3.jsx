import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg'
import lines from '../../assets/svgs/lines-F7LP3.svg'
const Feature7LP3 = () => {
    return (
        <section className='feature-7-LP3-section'>
            <img className='lines-img' src={lines} width={1890} />
            <div className='feature-7-LP3'>
                <div className='header-container'>
                    <h1 className='header'>Make exceptional customer service your selling <br /> point, while cutting costs by up to 70%.</h1>
                    <button className='schedule-call-cta'>
                        Schedule a consultation call <img src={arrowWhite} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Feature7LP3