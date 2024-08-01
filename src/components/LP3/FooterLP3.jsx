import React from 'react'
import waterMarkImg from '../../assets/svgs/watermark-lp3-footer.svg';
import '../../styles/LP3/FooterLP3.scss';
const FooterLP3 = () => {
    return (
        <section className='LP3-footer-section'>
            <div className='LP3-footer'>
                <div className='text-container'>
                    <div className='left'>
                        {/* <span style={{ cursor: 'auto' }}>© 2024 Inflexion.AI</span> */}
                        {/* <span>Terms of Use</span>
                        <span>Privacy Policy</span> */}

                    </div>
                    <div className='right'>
                        {/* <span>Features</span>
                        <span>Blog</span>
                        <span>How we work?</span> */}

                    </div>
                </div>
                <div className='watermark-container'>
                    <img src={waterMarkImg} alt='watermark' />

                </div>
            </div>
            <div className='copyright-text-container'>
                <span style={{ cursor: 'auto' }}>© 2024 Inflexion.AI</span>

            </div>
        </section>
    )
}

export default FooterLP3