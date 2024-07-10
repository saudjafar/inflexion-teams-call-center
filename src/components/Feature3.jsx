import React from 'react'
import '../styles/Features.scss';
import attritionGraph from '../assets/svgs/attrition-graph.svg';
import smiley from '../assets/svgs/smiley.svg';
import arrowRight from '../assets/svgs/arrow-right.svg';
const Feature3 = () => {
    return (
        <section className='feature-3-section'>
            <h1 className='heading'>Effortless Outsourcing</h1>

            <div className='agent-features-1'>
                <div className='box1'>
                    <h3 className='heading'>Get Started in Weeks</h3>
                    <p className='subtext'>Transform your customer service into the gold standard of your industry in record time.</p>
                </div>
                <div className='box2'>
                    <h3 className='heading'>Uninterrupted Support, 24/7/365</h3>
                    <p className='subtext'>Never stress over agent absences again. We cross-train a deep bench of agents specifically for your brand, ready to jump in at a moment's notice. Sick days, seasonal spikes, or midnight madness – we've got you covered around the clock. Your customers will always have a friendly, knowledgeable agent ready to assist.</p>
                    <button className='get-started-cta'>Get Started</button>
                </div>
            </div>

            <div className='agent-features-2'>
                <div className='left'>
                    <div className='header'>Retention That Defies Industry Norms</div>
                    <div className='subtext'>Talent churn can derail projects and drain resources – we've cracked the code. Experience the peace of mind that comes with a stable, committed team. Our talent retention rate of 95%+ is unparalleled. We guarantee consistent quality and accelerated project timelines.</div>
                    <button className='learn-more-cta'>Learn More <img src={arrowRight} /></button>
                </div>
                <div className='right'>
                    <img src={attritionGraph} />
                    <img src={smiley} style={{ position: 'relative', top: '-5.5rem' }} />
                    <div className='header'>
                        {`<5% Attrition Rate`}
                    </div>
                    <div className='subtext'>
                        vs. 38% Industry Average
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature3