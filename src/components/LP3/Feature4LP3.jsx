import React from 'react';
import '../../styles/LP3/FeaturesLP3.scss';
import checkmark from '../../assets/svgs/checkmark-lp3.svg';
import F4LP3SVG from '../../assets/svgs/F4LP3.svg';
import arrowRight from '../../assets/svgs/arrow-black-F4LP3.svg';
import arrowRightWhite from '../../assets/svgs/arrow-white.svg';
import { Button } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature4LP3 = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.3,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

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
    const pointVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
            className='feature-4-LP3-section'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
        >
            <motion.img
                src={F4LP3SVG}
                className='header-svg'
                variants={childVariants}
            />
            <motion.div className='feature-4-LP3' variants={childVariants}>
                <motion.div className='header-container' variants={childVariants}>
                    <span className='pre-header'>BENEFITS</span>
                    <h1 className='header'>Increase Your NPS & Slash Costs</h1>
                    <p className='subtext'>We help reduce costs by up to 70% compared to on-shore hires while enhancing quality. Our flexible, scalable solutions eliminate fixed overheads and lower non-essential expenditures, making your company more agile, profitable, and customer-focused.</p>
                </motion.div>
                <motion.div className='points-container' variants={containerVariants}>
                    <motion.div className='point' variants={pointVariants}>
                        <img src={checkmark} width={48} />
                        <span>Enhance Customer <br /> Satisfaction</span>
                    </motion.div>
                    <motion.div className='point' variants={pointVariants}>
                        <img src={checkmark} width={48} />
                        <span>Reduce Operational<br /> Costs</span>
                    </motion.div>
                    <motion.div className='point' variants={pointVariants}>
                        <img src={checkmark} width={48} />
                        <span>Scale Customer <br />Support</span>
                    </motion.div>
                </motion.div>
                <motion.div variants={childVariants}>
                    <Button className='why-us-cta'>
                        Discover Our Edge <img className='arrow-icon' src={arrowRight} /><img className='arrow-icon-hover' src={arrowRightWhite} />
                    </Button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Feature4LP3;
