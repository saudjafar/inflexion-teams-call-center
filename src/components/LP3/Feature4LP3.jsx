import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import checkmark from '../../assets/svgs/checkmark-lp3.svg';
import F4LP3SVG from '../../assets/svgs/F4LP3.svg';
import arrowRight from '../../assets/svgs/arrow-black-F4LP3.svg';
import arrowRightWhite from '../../assets/svgs/arrow-white.svg'
import { Button } from 'antd';

const Feature4LP3 = () => {
    return (
        <section className='feature-4-LP3-section'>
            <img src={F4LP3SVG} className='header-svg' />
            <div className='feature-4-LP3'>
                <div className='header-container'>
                    <span className='pre-header'>BENEFITS</span>
                    <h1 className='header'>Increase Your NPS & Slash Costs</h1>
                    <p className='subtext'>We help reduce costs by up to 70% compared to on-shore hires while enhancing quality. Our flexible, scalable solutions eliminate fixed overheads and lower non-essential expenditures, making your company more agile, profitable, and customer-focused.</p>
                </div>
                <div className='points-container'>
                    <div className='point'>
                        <img src={checkmark} width={48} />
                        <span>Enhance Customer <br /> Satisfaction</span>
                    </div>
                    <div className='point'>
                        <img src={checkmark} width={48} />
                        <span>Reduce Operational<br /> Costs</span>
                    </div>
                    <div className='point'>
                        <img src={checkmark} width={48} />
                        <span>Scale Customer <br />Support</span>
                    </div>
                </div>
                <Button className='why-us-cta'>
                    See Why Us <img className='arrow-icon' src={arrowRight} /><img className='arrow-icon-hover' src={arrowRightWhite} />
                </Button>
            </div>
        </section>
    )
}

export default Feature4LP3
