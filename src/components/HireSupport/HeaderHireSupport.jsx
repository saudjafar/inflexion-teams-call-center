import React from 'react'
import '../../styles/LP3/HeaderLP3.scss';
import inflexionLogoLP3 from '../../assets/svgs/inflexion-logo-LP3.svg';
import { Button } from 'antd';
import { useModal } from '../../contexts/ModalContext';
import useTrackButtonClick from '../../contexts/useTrackButtonClick';


const HeaderHireSupport = () => {
    const { showModal } = useModal();
    const trackGetAQuoteClick = useTrackButtonClick('Get a Quote');


    return (
        <section className='header-LP3-container'>
            <div className='header-LP3'>
                <img src={inflexionLogoLP3} alt='inflexion-logo' />
                {/* <div className='desktop-navbar-container'>
                    <span className='navbar-item'>Features</span>
                    <span className='navbar-item'>How it works</span>
                    <span className='navbar-item'>Blog</span>
                </div> */}
                <Button className='quote-cta-header-hire-support' onClick={() => { showModal(); trackGetAQuoteClick(); }}>Get A Quote</Button>
            </div>
        </section>
    )
}

export default HeaderHireSupport