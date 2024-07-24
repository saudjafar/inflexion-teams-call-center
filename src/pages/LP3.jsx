import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/LP3/LP3.scss';
import HeaderLP3 from '../components/LP3/HeaderLP3';
import HeroLP3 from '../components/LP3/HeroLP3';
import Feature1LP3 from '../components/LP3/Feature1LP3';
import Feature2LP3 from '../components/LP3/Feature2LP3';
import Feature3LP3 from '../components/LP3/Feature3LP3';
import Feature4LP3 from '../components/LP3/Feature4LP3';
import Feature5LP3 from '../components/LP3/Feature5LP3';
import Feature6LP3 from '../components/LP3/Feature6LP3';
import Feature7LP3 from '../components/LP3/Feature7LP3';
import Feature8LP3 from '../components/LP3/Feature8LP3';
import FooterLP3 from '../components/LP3/FooterLP3';
import ScrollAnimation from 'react-animate-on-scroll';


import backgroundImage from '../assets/imgs/11771170_4850022.jpg'; // replace with your actual background image path

const LP3 = () => {
    return (
        <section className='LP3-section'>
            <HeaderLP3 />
            <HeroLP3 />
            <Parallax
                style={{ borderRadius: '2rem' }}
                blur={3}
                bgImage={backgroundImage}
                bgImageAlt="background"
                strength={500}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Feature1LP3 />
                    <Feature2LP3 />
                </div>
            </Parallax>
            <Feature3LP3 />
            <Feature4LP3 />
            <Feature5LP3 />
            <Feature6LP3 />
            <Feature7LP3 />
            <Feature8LP3 />
            <FooterLP3 />
        </section>
    );
};

export default LP3;






// import React from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import '../styles/LP3/LP3.scss';
// import HeaderLP3 from '../components/LP3/HeaderLP3';
// import HeroLP3 from '../components/LP3/HeroLP3';
// import Feature1LP3 from '../components/LP3/Feature1LP3';
// import Feature2LP3 from '../components/LP3/Feature2LP3';
// import Feature3LP3 from '../components/LP3/Feature3LP3';
// import Feature4LP3 from '../components/LP3/Feature4LP3';
// import Feature5LP3 from '../components/LP3/Feature5LP3';
// import Feature6LP3 from '../components/LP3/Feature6LP3';
// import Feature7LP3 from '../components/LP3/Feature7LP3';
// import Feature8LP3 from '../components/LP3/Feature8LP3';
// import FooterLP3 from '../components/LP3/FooterLP3';

// const LP3 = () => {
//     return (
//         <section className='LP3-section'>
//             <HeaderLP3 />
//             <HeroLP3 />
//             <Feature1LP3 />
//             <Feature2LP3 />
//             <Feature3LP3 />
//             <Feature4LP3 />
//             <Feature5LP3 />
//             <Feature6LP3 />
//             <Feature7LP3 />
//             <Feature8LP3 />
//             <FooterLP3 />
//         </section>
//     )
// }

// export default LP3;
