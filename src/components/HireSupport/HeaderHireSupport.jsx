import React from 'react'
import '../../styles/LP3/HeaderLP3.scss';
import inflexionLogoLP3 from '../../assets/svgs/inflexion-logo-LP3.svg';
import { Button } from 'antd';
const HeaderHireSupport = () => {
    return (
        <section className='header-LP3-container'>
            <div className='header-LP3'>
                <img src={inflexionLogoLP3} alt='inflexion-logo' />
                {/* <div className='desktop-navbar-container'>
                    <span className='navbar-item'>Features</span>
                    <span className='navbar-item'>How it works</span>
                    <span className='navbar-item'>Blog</span>
                </div> */}
                <Button className='quote-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>Get A Quote</Button>
            </div>
        </section>
    )
}

export default HeaderHireSupport