import React from 'react'
import '../../styles/LP3/FeaturesLP3.scss';
import LP3F2H1 from '../../assets/svgs/LP3F2H1.svg';
import LP3F2H2 from '../../assets/svgs/LP3F2H2.svg';
import LP3F2H3 from '../../assets/svgs/LP3F2H3.svg';
import LP3F2CustCard from '../../assets/svgs/LP3F2CustCard.svg';
import LP3F2World from '../../assets/svgs/LP3F2World.svg';

const Feature2LP3 = () => {
    return (
        <section className='feature-2-LP3-section'>
            <div className='feature-2-LP3'>
                <div className='header-container'>
                    <h1 className='header'>
                        Access <span style={{ color: '#2A71FA' }}>Elite Customer Service</span> Talent Globally
                    </h1>
                    <p className='sub-header'>
                        Our global talent acquisition process combines cutting-edge AI technology with extensive human expertise to set a new standard in customer service staffing.
                    </p>
                </div>
                <div className='LP3F2-svgs-container'>
                    <div className='left'>
                        <img src={LP3F2H1} />
                        <img src={LP3F2H2} />
                        <img src={LP3F2H3} />

                    </div>
                    <div className='right'>
                        <img className='img-1' src={LP3F2CustCard} width={277} height={254} />
                        <img className='img-2' src={LP3F2World} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature2LP3