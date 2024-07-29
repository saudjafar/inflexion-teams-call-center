import React, { useEffect } from 'react'
import '../styles/HowItWorks/HowItWorks.scss'
import HeaderLP3 from '../components/LP3/HeaderLP3'
import FooterLP3 from '../components/LP3/FooterLP3'
import Feature7LP3 from '../components/LP3/Feature7LP3'
import Feature8LP3 from '../components/LP3/Feature8LP3'
import dotsSVG from '../assets/svgs/216.light.svg'
import { Button } from 'antd';
import heroImg from '../assets/imgs/how-it-works-hero.png'
import LogoSliderLP3 from '../components/LP3/LogoSliderLP3';
import gridSVG from '../assets/svgs/LP3-grid.svg'
import scalableTeamsL from '../assets/svgs/scalable-teams-l.svg';
import scalableTeamsR from '../assets/svgs/scalable-teams-r.svg';
import FaqClpsPanel from '../components/FaqClpsPanel'
import OurProcessScrollMenu from '../components/OurProcessScrollMenu'
import ScrollToTop from "react-scroll-to-top";
import arrowTop from '../assets/svgs/arrow-top.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.compat.css"

// const HowItWorks = () => {
//     const leftAnimation = {
//         hidden: { opacity: 0, y: 100 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.4 },
//         },
//     };

//     const rightAnimation = {
//         hidden: { opacity: 0, y: 120 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6 },
//         },
//     };
//     useEffect(() => {
//         const handleScroll = () => {
//             const footer = document.querySelector('.footer');
//             const scrollPosition = window.scrollY + window.innerHeight;
//             const threshold = document.documentElement.scrollHeight * 0.8; // 80% scroll

//             if (scrollPosition >= threshold) {
//                 footer.classList.add('show');
//             } else {
//                 footer.classList.remove('show');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     return (
//         <>
//             <div style={{ background: '#030303' }}>
//                 <HeaderLP3 />
//                 <section className='hero-how-it-works-section'>
//                     <div className='hero-how-it-works'>
//                         <img src={dotsSVG} style={{ position: 'absolute', top: '-12rem', zIndex: '1' }} />
//                         <motion.div
//                             initial="hidden"
//                             animate="visible"
//                             variants={leftAnimation}
//                             className='left'
//                         >
//                             <span className='pre-header'>
//                                 HOW WE WORK
//                             </span>
//                             <h1 className='header'>
//                                 Global Talent with AI Superpowers
//                             </h1>
//                             <span className='sub-headline'>
//                                 Inflexion Teams leverages cutting-edge AI technology and extensively trained agents to provide exceptional customer service solutions, acting as a seamless extension of your company's support team.
//                             </span>

//                             <Button className='get-started-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>Get Started</Button>

//                         </motion.div>
//                         <motion.div
//                             initial="hidden"
//                             animate="visible"
//                             variants={rightAnimation}
//                             className='right'
//                         >
//                             {/* <div className='right'> */}
//                             <img src={heroImg} />
//                             {/* </div> */}
//                         </motion.div>
//                     </div>


//                     <>
//                         <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
//                             <h1 className='carousel-header'>We’ve hired talent from</h1>
//                             <LogoSliderLP3 />
//                         </ScrollAnimation>
//                         <div className='LP3-gridSVG-container'>
//                             <img src={gridSVG} />
//                         </div>
//                     </>

//                 </section>

//                 <section className='scalable-teams-section'>
//                     <div className='scalable-teams'>
//                         <div className='header-container'>
//                             <img className='img-l' src={scalableTeamsL} />
//                             <img className='img-r' src={scalableTeamsR} />
//                             <span className='pre-header'>
//                                 SCALABLE TEAMS
//                             </span>
//                             <h1 className='header'>
//                                 What are Fractional CX Teams?
//                             </h1>
//                             <p className='sub-header'>
//                                 Fractional CX teams are flexible customer service resources that can scale with your business needs. As your customer support requirements change, our teams can adapt quickly. With extensive training and AI-powered tools, these professionals are able to handle complex customer inquiries with unprecedented efficiency and accuracy.
//                             </p>
//                         </div>
//                         <div className='scalable-teams-cards-container'>


//                             <div className='card card-left'>
//                                 <span className='pre-header'>
//                                     SHARED AGENTS
//                                 </span>
//                                 <h2 className='header'>
//                                     On-Demand, AI-Empowered Support
//                                 </h2>
//                                 <p className='sub-text'>
//                                     A pool of highly trained customer service agents, equipped with our proprietary AI tools, provides flexible support across multiple clients. These agents are ideal for businesses with fluctuating support needs or those looking to scale their customer service operations cost-effectively.
//                                 </p>
//                             </div>

//                             <div className='card card-right'>
//                                 <span className='pre-header'>
//                                     DEDICATED AGENTS
//                                 </span>
//                                 <h2 className='header'>
//                                     Exclusive, Brand-<br />Aligned Teams
//                                 </h2>
//                                 <p className='sub-text'>
//                                     We build and manage a team of customer service agents exclusively dedicated to your brand. These agents become an extension of your company, deeply understanding your products, services, and company culture to provide a seamless customer experience.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className='our-process-section'>
//                     <img src={dotsSVG} className='dots-l' />
//                     <img src={dotsSVG} className='dots-r' />
//                     <div className='process-container'>
//                         <div className='header-container'>

//                             <h1 className='header'>
//                                 Here's Our Process:
//                             </h1>
//                             <p className='sub-text'>
//                                 Hire an end-to-end CX team in weeks (not months).
//                             </p>
//                         </div>

//                         <div className='scroll-menu-container'>
//                             <OurProcessScrollMenu />
//                         </div>

//                     </div>
//                 </section>

//                 <section className='faqs-section'>
//                     <div className='faqs-container'>
//                         <div className='header-container'>
//                             <span className='pre-header'>
//                                 FAQ’s
//                             </span>
//                             <h1 className='header'>
//                                 Frequently Asked questions
//                             </h1>
//                         </div>
//                         <div className='faqs-collapse-container'>
//                             <FaqClpsPanel />
//                         </div>
//                     </div>
//                 </section>

//                 <Feature7LP3 />
//                 <ScrollToTop smooth style={{ zIndex: '100' }} component={<img src={arrowTop} />} />

//             </div>
//             <div className='footer'>
//                 <Feature8LP3 />
//                 <FooterLP3 />
//             </div>
//         </>
//     )
// }
const HowItWorks = () => {
    const leftAnimation = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    const rightAnimation = {
        hidden: { opacity: 0, y: 120 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const controlsScalable = useAnimation();
    const { ref: refScalable, inView: inViewScalable } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const controlsProcess = useAnimation();
    const { ref: refProcess, inView: inViewProcess } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const controlsFaqs = useAnimation();
    const { ref: refFaqs, inView: inViewFaqs } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inViewScalable) {
            controlsScalable.start('visible');
        }
    }, [controlsScalable, inViewScalable]);

    useEffect(() => {
        if (inViewProcess) {
            controlsProcess.start('visible');
        }
    }, [controlsProcess, inViewProcess]);

    useEffect(() => {
        if (inViewFaqs) {
            controlsFaqs.start('visible');
        }
    }, [controlsFaqs, inViewFaqs]);

    const containerVariants = {
        hidden: { opacity: 0, y: 120 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer');
            const scrollPosition = window.scrollY + window.innerHeight;
            const threshold = document.documentElement.scrollHeight * 0.9; // 90% scroll

            if (scrollPosition >= threshold) {
                footer.classList.add('show');
            } else {
                footer.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{ background: '#030303' }}>
                <HeaderLP3 />
                <section className='hero-how-it-works-section'>
                    <div className='hero-how-it-works'>
                        <img src={dotsSVG} style={{ position: 'absolute', top: '-12rem', zIndex: '1' }} />
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={leftAnimation}
                            className='left'
                        >
                            <span className='pre-header'>
                                HOW WE WORK
                            </span>
                            <h1 className='header'>
                                Global Talent with AI Superpowers
                            </h1>
                            <span className='sub-headline'>
                                Inflexion Teams leverages cutting-edge AI technology and extensively trained agents to provide exceptional customer service solutions, acting as a seamless extension of your company's support team.
                            </span>

                            <Button className='get-started-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>Get Started</Button>

                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={rightAnimation}
                            className='right'
                        >
                            {/* <div className='right'> */}
                            <img src={heroImg} />
                            {/* </div> */}
                        </motion.div>
                    </div>

                    <>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <h1 className='carousel-header'>We’ve hired talent from</h1>
                            <LogoSliderLP3 />
                        </ScrollAnimation>
                        <div className='LP3-gridSVG-container'>
                            <img src={gridSVG} />
                        </div>
                    </>

                </section>

                <section className='scalable-teams-section'>
                    <motion.div
                        ref={refScalable}
                        initial="hidden"
                        animate={controlsScalable}
                        variants={containerVariants}
                        className='scalable-teams'
                    >
                        <div className='header-container'>
                            <img className='img-l' src={scalableTeamsL} />
                            <img className='img-r' src={scalableTeamsR} />
                            <span className='pre-header'>
                                SCALABLE TEAMS
                            </span>
                            <h1 className='header'>
                                What are Fractional CX Teams?
                            </h1>
                            <p className='sub-header'>
                                Fractional CX teams are flexible customer service resources that can scale with your business needs. As your customer support requirements change, our teams can adapt quickly. With extensive training and AI-powered tools, these professionals are able to handle complex customer inquiries with unprecedented efficiency and accuracy.
                            </p>
                        </div>
                        <motion.div className='scalable-teams-cards-container'>
                            <motion.div
                                variants={itemVariants}
                                className='card card-left'
                            >
                                <span className='pre-header'>
                                    SHARED AGENTS
                                </span>
                                <h2 className='header'>
                                    On-Demand, AI-Empowered Support
                                </h2>
                                <p className='sub-text'>
                                    A pool of highly trained customer service agents, equipped with our proprietary AI tools, provides flexible support across multiple clients. These agents are ideal for businesses with fluctuating support needs or those looking to scale their customer service operations cost-effectively.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className='card card-right'
                            >
                                <span className='pre-header'>
                                    DEDICATED AGENTS
                                </span>
                                <h2 className='header'>
                                    Exclusive, Brand-<br />Aligned Teams
                                </h2>
                                <p className='sub-text'>
                                    We build and manage a team of customer service agents exclusively dedicated to your brand. These agents become an extension of your company, deeply understanding your products, services, and company culture to provide a seamless customer experience.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                <section className='our-process-section'>
                    <motion.div
                        ref={refProcess}
                        initial="hidden"
                        animate={controlsProcess}
                        variants={containerVariants}
                        className='process-container'
                    >
                        <div className='header-container'>
                            <h1 className='header'>
                                Here's Our Process:
                            </h1>
                            <p className='sub-text'>
                                Hire an end-to-end CX team in weeks (not months).
                            </p>
                        </div>

                        <motion.div className='scroll-menu-container'>
                            <OurProcessScrollMenu />
                        </motion.div>
                    </motion.div>
                </section>

                <section className='faqs-section'>
                    <motion.div
                        ref={refFaqs}
                        initial="hidden"
                        animate={controlsFaqs}
                        variants={containerVariants}
                        className='faqs-container'
                    >
                        <div className='header-container'>
                            <span className='pre-header'>
                                FAQ’s
                            </span>
                            <h1 className='header'>
                                Frequently Asked questions
                            </h1>
                        </div>
                        <motion.div className='faqs-collapse-container'>
                            <FaqClpsPanel />
                        </motion.div>
                    </motion.div>
                </section>

                <Feature7LP3 />
                <ScrollToTop smooth style={{ zIndex: '100' }} component={<img src={arrowTop} />} />

            </div>
            <div className='footer'>
                <Feature8LP3 />
                <FooterLP3 />
            </div>
        </>
    )
}


export default HowItWorks