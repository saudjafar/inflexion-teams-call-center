import React, { useState, useEffect } from 'react'
import '../styles/HireSupport/HireSupport.scss'
import FooterLP3 from '../components/LP3/FooterLP3'
import freeTagIcon from '../assets/svgs/free-tag.svg'
import checkIcon from '../assets/svgs/check-whitebg.svg'
import { Button, Card, Modal, Row, Col } from 'antd'
import outSourceImg from '../assets/svgs/outsourceImg.svg'
import Modal1 from '../components/HireSupport/Modal1'
import Modal2 from '../components/HireSupport/Modal2'
import Modal3 from '../components/HireSupport/Modal3'
import Modal4 from '../components/HireSupport/Modal4'
import Modal5 from '../components/HireSupport/Modal5'
import HeaderHireSupport from '../components/HireSupport/HeaderHireSupport'
import dotsSVG from '../assets/svgs/216.light.svg'
import heroImg from '../assets/imgs/how-it-works-hero.png'
import LogoSliderLP3 from '../components/LP3/LogoSliderLP3';
import gridSVG from '../assets/svgs/LP3-grid.svg'
import logo1 from '../assets/svgs/icon-google.svg';
import logo2 from '../assets/svgs/icon-tiktok.svg';
import logo3 from '../assets/svgs/accenture_logo.svg.svg';
import logo4 from '../assets/svgs/uber_logo.svg.svg';
import greenCheck from '../assets/svgs/greenCheck.svg';
import blue01 from '../assets/svgs/01-blue.svg';
import blue02 from '../assets/svgs/02-blue.svg';
import blue03 from '../assets/svgs/03-blue.svg';

import f2Img1 from '../assets/imgs/Group 1820550705.png';
import f2Img2 from '../assets/imgs/Group 1820550703.png';
import f2Img3 from '../assets/imgs/Group 1820550712.png';

import ScrollToTop from "react-scroll-to-top";
import arrowTop from '../assets/svgs/arrow-top.svg'
import ModalCloseIcon from '../assets/svgs/modal-close-icon.svg'

import ScrollAnimation from 'react-animate-on-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import "animate.css/animate.compat.css"

import { useModal } from '../contexts/ModalContext';

const HireSupport = () => {
    const { showModal } = useModal();

    const agentSizeArray = ['1 - 2 Staff', '3 - 10 Staff', '11 - 20 Staff', '21 - 50 Staff', '50+ Staff', 'Other']

    const [selectedCell, setSelectedCell] = useState(null);

    const handleCellClick = (cellId) => {
        setSelectedCell(cellId);
    };

    const agentValCellStyle = (cellId) => ({
        borderRadius: '2.5rem',
        border: selectedCell === cellId ? '1px solid black' : '1px solid #D5D5D5',
        padding: '1.31rem 1.25rem',
        color: selectedCell === cellId ? 'white' : '#3E3E3E',
        background: selectedCell === cellId ? '#030303' : 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        fontSize: '1.125rem',
        fontFamily: 'Helvetica Now Display',
        fontWeight: '700'
    });

    const leftAnimation = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    const rightAnimation = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };


    const statsMetric = [
        {
            line1: '4M+',
            color: '#FEEA82',
            line2: 'Global talent pool',
        },
        {
            line1: '70%+',
            color: '#21D273',
            line2: 'Average cost savings',
        },
        {
            line1: '20+',
            color: '#B68DFC',

            line2: <>Years of Combined <br />AI expertise</>,
        },
        {
            line1: '50+',
            color: '#70DCF3',

            line2: <>Years of combined <br />BPO expertise</>,
        },
    ]

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

    ////////////////////////////////////////////////////////////////////////////////////
    const controlsHireSupportFeatures = useAnimation();
    const { ref: refHireSupportFeatures, inView: inViewHireSupportFeatures } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const controlsStats = useAnimation();
    const { ref: refStats, inView: inViewStats } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const controlsHireSupport = useAnimation();
    const { ref: refHireSupport, inView: inViewHireSupport } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inViewHireSupportFeatures) {
            controlsHireSupportFeatures.start('visible');
        }
    }, [controlsHireSupportFeatures, inViewHireSupportFeatures]);

    useEffect(() => {
        if (inViewStats) {
            controlsStats.start('visible');
        }
    }, [controlsStats, inViewStats]);

    useEffect(() => {
        if (inViewHireSupport) {
            controlsHireSupport.start('visible');
        }
    }, [controlsHireSupport, inViewHireSupport]);

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div style={{ background: '#030303' }}>
            <HeaderHireSupport />
            <section className='hire-support-hero-section'>
                <section className='hire-support-hero'>
                    <div className='hero-hire-support'>
                        <img src={dotsSVG} style={{ position: 'absolute', top: '-12rem', zIndex: '1' }} />
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={leftAnimation}
                            className='left'
                        >
                            <span className='pre-header'>
                                Transform your CX with AI-powered offshore talent
                            </span>
                            <h1 className='header'>
                                Hire word-class customer support that costs <span style={{ color: '#2A71FA' }}>70% less</span>
                            </h1>
                            <span className='sub-headline'>
                                Elevate your brand while reducing costs by up to 70%. Money back guaranteed.
                            </span>
                            <div className='what-you-recieve'>
                                <span className='text'>Here's what you'll receive:</span>
                                <ul className='list-container'>
                                    <li className='list-item'>
                                        <img src={greenCheck} />
                                        <span>Completely FREE onboarding and training of agents</span>
                                    </li>
                                    <li className='list-item'>
                                        <img src={greenCheck} />
                                        <span>Expert guidance on integrating cutting-edge AI technology</span>
                                    </li>
                                    <li className='list-item'>
                                        <img src={greenCheck} />
                                        <span>Custom ROI analysis and efficiency projection report</span>
                                    </li>
                                </ul>
                            </div>
                            <Button
                                className='get-started-cta'
                                // onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}
                                onClick={showModal}
                            >
                                Book Your Free Trial
                            </Button>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={rightAnimation}
                            className='right'
                        >
                            {/* <HeroSlider /> */}
                            <img src={heroImg} />
                        </motion.div>
                    </div>

                    <>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <h1 className='carousel-header'>We’ve hired talent from</h1>
                            <LogoSliderLP3 />
                        </ScrollAnimation>
                        <div className='how-it-works-gridImg-container'>
                            <img src={gridSVG} />
                        </div>
                    </>

                </section>
            </section>
            {/* 
            <section className='hire-support-features-section'>
                <div className='hire-support-features'>
                    <div className='feature1'>
                        <h1 className='header'>
                            Experience Exceptional <span style={{ color: '#2A71FA' }}>Customer Support</span> with Inflexion Teams
                        </h1>

                        <div className='feature1-cards-container'>
                            <Card className='feature1-card'>
                                <img src={blue01} />
                                <h3 className='feature-header'>Tell us about the agents you need</h3>
                                <p className='feature-subtext'>
                                    Share your customer support requirements with our experienced consultants. We'll leverage our AI-driven insights to craft a tailored plan that meets your unique needs.
                                </p>
                            </Card>
                            <Card className='feature1-card'>
                                <img src={blue02} />
                                <h3 className='feature-header'>We Build Your Dream Team at Zero Risk</h3>
                                <p className='feature-subtext'>
                                    Inflexion Teams will recruit, onboard, and train your customer support team with our cutting-edge AI technology and industry expertise. You won’t pay anything for us to completley train and onboard your entire team.                                </p>
                            </Card>
                            <Card className='feature1-card'>
                                <img src={blue03} />
                                <h3 className='feature-header'>Enjoy a Fully-Trained Team with a Guarantee</h3>
                                <p className='feature-subtext'>
                                    Receive a completely vetted and trained customer support agent, backed by our advanced AI tools. Test their skills with our one-week money-back guarantee for total peace of mind.                                </p>
                            </Card>
                        </div>

                    </div>
                    <div className='feature2'>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                            <h1 className='header'>
                                Get expert AI-powered outsourcing assistance
                            </h1>
                            <p className='subtext'>
                                Inflexion Teams is a leading premium outsourcing company specializing in customer support. Working with Inflexion Teams ensures you get high-quality, AI-enhanced customer service solutions - without compromise or hassle.
                            </p>

                            <div className='feature2-cards-container'>
                                <div className='feature2-card card1'>
                                    <div className='left'>
                                        <img src={f2Img1} />
                                    </div>
                                    <div className='right'>
                                        <h2>It's efficient, innovative, & free!</h2>
                                        <p>
                                            Complete the quick 60-second quotation form and receive:<br />
                                            <p style={{ margin: '1rem 0' }}>
                                                — A tailored AI and remote team implementation strategy<br />
                                                — Detailed consultation on optimizing your customer support<br />
                                                — Free onboarding and training of agents customized to your company<br />
                                            </p>
                                            It is completely free to use, personalised for you and with zero obligation.
                                        </p>
                                    </div>
                                </div>
                                <div className='feature2-card card2'>
                                    <div className='left'>
                                        <h2>The customer service innovators</h2>
                                        <p>
                                            Inflexion Teams offers the world's most advanced AI-powered customer support outsourcing.
                                            Our service connects top global talent with cutting-edge AI tools to deliver exceptional customer
                                            experiences.<br /><br />
                                            Inflexion Teams is the leader in AI-enhanced customer support, providing end-to-end managed
                                            services from recruitment and training to ongoing optimization.
                                        </p>
                                    </div>
                                    <div className='right' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <img src={f2Img2} />
                                    </div>
                                </div>
                                <div className='feature2-card card3'>
                                    <div className='left'>
                                        <img src={f2Img3} />
                                    </div>
                                    <div className='right'>
                                        <h2>Confidential, transparent, <span style={{ textTransform: 'lowercase' }}>and</span> transformative</h2>
                                        <p style={{ lineHeight: "160%", margin: '1.75rem 0' }}>
                                            The process is completely confidential for you, the client, and designed to be seamless and impactful.
                                            Our mission is to be a trusted partner in elevating your customer experience through AI and human talent.<br /><br />
                                            We do not share your information with any third parties. We provide a detailed, personalized strategy and
                                            free onboarding before any commitment. Explore how AI can transform your customer support with no pressure or risk.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='stats-section'>
                <div className='stats'>
                    <div className='stats-text'>
                        <span className='pre-header'>STATS</span>
                        <h1 className='header'>Exceptional Service, Simplified</h1>
                        <p className='subtext'>
                            Inflexion Teams is the premier AI-enhanced customer support outsourcing solution.
                            We specialize in delivering top-tier remote customer service teams, leveraging cutting
                            -edge AI technology to elevate your customer experience. Our mission is to provide
                            7-star customer service to businesses of all sizes, making exceptional support accessible
                            and affordable.
                        </p>

                        <div className='company-logos-container' style={{ display: 'flex', gap: '3rem' }}>
                            <img src={logo1} />
                            <img src={logo2} />
                            <img src={logo3} />
                            <img src={logo4} />

                        </div>
                        <Button className='free-quote-cta' onClick={showModal}>
                            Get Your Free Quote
                        </Button>
                    </div>
                    <div className='stats-metric'>
                        {statsMetric.map((stats, index) => (
                            <div key={index} className={`stat-container container${index + 1}`}>
                                <h2 className='stat-header' style={{ color: stats.color }}>{stats.line1}</h2>
                                <span className='stat-subtext'>{stats.line2}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='hire-support-section'>
                <section className='get-started-section'>
                    <div className='get-started'>
                        <h1 className='header'>
                            Simplify your customer service. Consult with AI experts, free.
                        </h1>
                        <div className='get-started-details'>
                            <div className='details-text'>
                                <div className='text text-1'>
                                    <img src={freeTagIcon} style={{ position: 'absolute', top: '-5rem', right: '2rem' }} />
                                    <h3 className='heading'>Request your<br /> complimentary quote</h3>
                                    <p className='sub-text'>
                                        Hire end-to-end customer support and save up to 70% on staff costs. Speak with our outsourcing specialists to discover how Inflexion Teams can revolutionize your customer experience.
                                    </p>
                                </div>
                                <div className='text text-2'>
                                    <h4 className='heading'>
                                        Why partner with Inflexion Teams?
                                    </h4>
                                    <div className='list-container'>
                                        <span className='list-item'><img src={checkIcon} />Access AI expertise from team of ex-Google, Yahoo & PhDs</span>
                                        <span className='list-item'><img src={checkIcon} />Free training and onboarding of all agents</span>
                                        <span className='list-item'><img src={checkIcon} />No risk and 1-week money back guarantee</span>

                                    </div>
                                </div>
                            </div>
                            <div className='popup-cta-container'>
                                <h2 className='heading'>
                                    Get Started
                                </h2>
                                <div className='outsource-img-container'>
                                    <p className='outsource-img-text'>
                                        How many staff do you need to outsource?
                                    </p>
                                    <div className='agent-val-grid'>
                                        <Row gutter={[16, 16]}>
                                            {agentSizeArray.map((agentSize, index) => (
                                                <Col key={index} span={8} onClick={() => handleCellClick(index)} >
                                                    <div style={agentValCellStyle(index)} className='agent-val-cell'>
                                                        {agentSize}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </div>

                                <Button className="start-cta"
                                    onClick={showModal}
                                // onClick={() => { setOpenModal(true); setCurrentPage(1); }}
                                >
                                    Start
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </section> */}

            <section className='hire-support-features-section'>
                <motion.div
                    className='hire-support-features'
                    ref={refHireSupportFeatures}
                    initial="hidden"
                    animate={controlsHireSupportFeatures}
                    variants={containerVariants}
                >
                    <div className='feature1'>
                        <h1 className='header'>
                            Experience Exceptional <span style={{ color: '#2A71FA' }}>Customer Support</span> with Inflexion Teams
                        </h1>

                        <motion.div className='feature1-cards-container' variants={itemVariants}>
                            <Card className='feature1-card' >
                                <img src={blue01} />
                                <h3 className='feature-header'>Tell us about the agents you need</h3>
                                <p className='feature-subtext'>
                                    Share your customer support requirements with our experienced consultants. We'll leverage our AI-driven insights to craft a tailored plan that meets your unique needs.
                                </p>
                            </Card>
                            <Card className='feature1-card' >
                                <img src={blue02} />
                                <h3 className='feature-header'>We Build Your Dream Team at Zero Risk</h3>
                                <p className='feature-subtext'>
                                    Inflexion Teams will recruit, onboard, and train your customer support team with our cutting-edge AI technology and industry expertise. You won’t pay anything for us to completely train and onboard your entire team.
                                </p>
                            </Card>
                            <Card className='feature1-card' >
                                <img src={blue03} />
                                <h3 className='feature-header'>Enjoy a Fully-Trained Team with a Guarantee</h3>
                                <p className='feature-subtext'>
                                    Receive a completely vetted and trained customer support agent, backed by our advanced AI tools. Test their skills with our one-week money-back guarantee for total peace of mind.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                    <div className='feature2'>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                            <h1 className='header'>
                                Get expert AI-powered outsourcing assistance
                            </h1>
                            <p className='subtext'>
                                Inflexion Teams is a leading premium outsourcing company specializing in customer support. Working with Inflexion Teams ensures you get high-quality, AI-enhanced customer service solutions - without compromise or hassle.
                            </p>

                            <motion.div className='feature2-cards-container'>
                                <motion.div className='feature2-card card1' variants={itemVariants}>
                                    <div className='left'>
                                        <img src={f2Img1} />
                                    </div>
                                    <div className='right'>
                                        <h2>It's efficient, innovative, & free!</h2>
                                        <p>
                                            Complete the quick 60-second quotation form and receive:<br />
                                            <p style={{ margin: '1rem 0' }}>
                                                — A tailored AI and remote team implementation strategy<br />
                                                — Detailed consultation on optimizing your customer support<br />
                                                — Free onboarding and training of agents customized to your company<br />
                                            </p>
                                            It is completely free to use, personalized for you and with zero obligation.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div className='feature2-card card2' variants={itemVariants}>
                                    <div className='left'>
                                        <h2>The customer service innovators</h2>
                                        <p>
                                            Inflexion Teams offers the world's most advanced AI-powered customer support outsourcing.
                                            Our service connects top global talent with cutting-edge AI tools to deliver exceptional customer
                                            experiences.<br /><br />
                                            Inflexion Teams is the leader in AI-enhanced customer support, providing end-to-end managed
                                            services from recruitment and training to ongoing optimization.
                                        </p>
                                    </div>
                                    <div className='right' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <img src={f2Img2} />
                                    </div>
                                </motion.div>
                                <motion.div className='feature2-card card3' variants={itemVariants}>
                                    <div className='left'>
                                        <img src={f2Img3} />
                                    </div>
                                    <div className='right'>
                                        <h2>Confidential, transparent, <span style={{ textTransform: 'lowercase' }}>and</span> transformative</h2>
                                        <p style={{ lineHeight: "160%", margin: '1.75rem 0' }}>
                                            The process is completely confidential for you, the client, and designed to be seamless and impactful.
                                            Our mission is to be a trusted partner in elevating your customer experience through AI and human talent.<br /><br />
                                            We do not share your information with any third parties. We provide a detailed, personalized strategy and
                                            free onboarding before any commitment. Explore how AI can transform your customer support with no pressure or risk.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className='stats-section'>
                <motion.div
                    className='stats'
                    ref={refStats}
                    initial="hidden"
                    animate={controlsStats}
                    variants={containerVariants}
                >
                    <div className='stats-text'>
                        <span className='pre-header'>STATS</span>
                        <h1 className='header'>Exceptional Service, Simplified</h1>
                        <p className='subtext'>
                            Inflexion Teams is the premier AI-enhanced customer support outsourcing solution.
                            We specialize in delivering top-tier remote customer service teams, leveraging cutting
                            -edge AI technology to elevate your customer experience. Our mission is to provide
                            7-star customer service to businesses of all sizes, making exceptional support accessible
                            and affordable.
                        </p>

                        <div className='company-logos-container' style={{ display: 'flex', gap: '3rem' }}>
                            <img src={logo1} />
                            <img src={logo2} />
                            <img src={logo3} />
                            <img src={logo4} />
                        </div>
                        <Button className='free-quote-cta' onClick={showModal}>
                            Get Your Free Quote
                        </Button>
                    </div>
                    <motion.div className='stats-metric'>
                        {statsMetric.map((stats, index) => (
                            <motion.div key={index} className={`stat-container container${index + 1}`} variants={itemVariants}>
                                <h2 className='stat-header' style={{ color: stats.color }}>{stats.line1}</h2>
                                <span className='stat-subtext'>{stats.line2}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            <section className='hire-support-section'>
                <motion.section
                    className='get-started-section'
                    ref={refHireSupport}
                    initial="hidden"
                    animate={controlsHireSupport}
                    variants={containerVariants}
                >
                    <div className='get-started'>
                        <h1 className='header'>
                            Simplify your customer service. Consult with AI experts, free.
                        </h1>
                        <div className='get-started-details'>
                            <div className='details-text'>
                                <motion.div className='text text-1' variants={itemVariants}>
                                    <img src={freeTagIcon} style={{ position: 'absolute', top: '-5rem', right: '2rem' }} />
                                    <h3 className='heading'>Request your<br /> complimentary quote</h3>
                                    <p className='sub-text'>
                                        Hire end-to-end customer support and save up to 70% on staff costs. Speak with our outsourcing specialists to discover how Inflexion Teams can revolutionize your customer experience.
                                    </p>
                                </motion.div>
                                <motion.div className='text text-2' variants={itemVariants}>
                                    <h4 className='heading'>
                                        Why partner with Inflexion Teams?
                                    </h4>
                                    <div className='list-container'>
                                        <span className='list-item'><img src={checkIcon} />Access AI expertise from team of ex-Google, Yahoo & PhDs</span>
                                        <span className='list-item'><img src={checkIcon} />Free training and onboarding of all agents</span>
                                        <span className='list-item'><img src={checkIcon} />No risk and 1-week money back guarantee</span>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div className='popup-cta-container' variants={itemVariants}>
                                <h2 className='heading'>
                                    Get Started
                                </h2>
                                <div className='outsource-img-container'>
                                    <p className='outsource-img-text'>
                                        How many staff do you need to outsource?
                                    </p>
                                    <div className='agent-val-grid'>
                                        <Row gutter={[16, 16]}>
                                            {agentSizeArray.map((agentSize, index) => (
                                                <Col key={index} span={8} onClick={() => handleCellClick(index)} >
                                                    <div style={agentValCellStyle(index)} className='agent-val-cell'>
                                                        {agentSize}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </div>
                                <Button className="start-cta"
                                    onClick={showModal}
                                >
                                    Start
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </section>


            <div className='footer'>
                <FooterLP3 />
            </div>
            <ScrollToTop smooth style={{ zIndex: '100' }} component={<img src={arrowTop} />} />

        </div>
    )
}

export default HireSupport