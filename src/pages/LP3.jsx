import React, { useEffect } from 'react';
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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTop from "react-scroll-to-top";
import arrowTop from '../assets/svgs/arrow-top.svg';

const LP3 = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

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
            <section className='LP3-section'>
                <HeaderLP3 />
                <HeroLP3 />
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    style={{
                        borderRadius: '2rem',
                        display: 'flex',
                        background: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <motion.div variants={itemVariants}>
                        <Feature1LP3 />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Feature2LP3 />
                    </motion.div>
                </motion.div>
                <Feature3LP3 />
                <Feature4LP3 />
                <Feature5LP3 />
                <Feature6LP3 />
                <Feature7LP3 />
                <ScrollToTop smooth style={{ zIndex: '100' }} component={<img src={arrowTop} />} />
            </section>
            <div className='footer'>
                <Feature8LP3 />
                <FooterLP3 />
            </div>
        </>
    );
};

export default LP3;
