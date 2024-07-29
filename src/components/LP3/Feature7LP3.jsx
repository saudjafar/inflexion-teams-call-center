import React, { useEffect } from 'react';
import '../../styles/LP3/FeaturesLP3.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import lines from '../../assets/svgs/lines-F7LP3.svg';
import { Button } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature7LP3 = () => {
    const controlsFeature7 = useAnimation();
    const { ref: refFeature7, inView: inViewFeature7 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inViewFeature7) {
            controlsFeature7.start('visible');
        }
    }, [controlsFeature7, inViewFeature7]);

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
        <section className='feature-7-LP3-section'>
            <img className='lines-img' src={lines} />
            <motion.div
                ref={refFeature7}
                initial="hidden"
                animate={controlsFeature7}
                variants={containerVariants}
                className='feature-7-LP3'
            >
                <motion.div variants={itemVariants} className='header-container'>
                    <h1 className='header'>Make exceptional customer service your selling point, while cutting costs by up to 70%.</h1>
                    <Button className='schedule-call-cta' onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}>
                        Schedule a consultation call <img src={arrowWhite} className='arrow-icon' /><img src={arrowRightBlue} className='arrow-icon-hover' />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Feature7LP3;
