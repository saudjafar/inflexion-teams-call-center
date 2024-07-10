import React from 'react';
import '../styles/Footer.scss';
import inflexionLogoFooter from '../assets/svgs/inflexion-logo-black.svg'
import facebookLogo from '../assets/svgs/icon-facebook.svg';
import instagramLogo from '../assets/svgs/icon-instagram.svg';
import twitterLogo from '../assets/svgs/icon-twitter.svg';
import linkedinLogo from '../assets/svgs/icon-linkedin.svg';
import youtubeLogo from '../assets/svgs/icon-youtube.svg';

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer'>
                <div className='line-1'>
                    <div className='logo-container'>
                        <img className='logo-img' src={inflexionLogoFooter} alt='Inflexion logo' />
                        <span className='logo-text'>Inflexion Teams</span>
                    </div>
                    <div className='links-container'>
                        <span>Services</span>
                        <span>Pricing</span>
                        <span>Process</span>
                        <span>About</span>
                    </div>
                </div>
                <div className='line-2'>
                    Meet Satoshi. The all in one Webflow Template created for all kind of financial services.
                </div>
                <div className='line-3'>
                    <span className='copyright-text'>© Inflexion Teams</span>
                    <div className='social-icon-links'>
                        <img src={facebookLogo} alt='facebook' />
                        <img src={instagramLogo} alt='instagram' />
                        <img src={twitterLogo} alt='twitter' />
                        <img src={linkedinLogo} alt='linkedin' />
                        <img src={youtubeLogo} alt='youtube' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer