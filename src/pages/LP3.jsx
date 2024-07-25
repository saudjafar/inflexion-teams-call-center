import React from 'react';
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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import backgroundImage from '../assets/imgs/11771170_4850022.jpg'; // replace with your actual background image path

const LP3 = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
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

    return (
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
            <Feature8LP3 />
            <FooterLP3 />
        </section>
    );
};

export default LP3;
