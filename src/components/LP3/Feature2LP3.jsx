import React from 'react';
import '../../styles/LP3/FeaturesLP3.scss';
import LP3F2H1 from '../../assets/svgs/LP3F2H1.svg';
import LP3F2H2 from '../../assets/svgs/LP3F2H2.svg';
import LP3F2H3 from '../../assets/svgs/LP3F2H3.svg';
import LP3F2CustCard from '../../assets/svgs/LP3F2CustCard.svg';
import LP3F2World from '../../assets/svgs/LP3F2World.svg';
import CollapsibleCards from './CollapsibleCards';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature2LP3 = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
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
                staggerChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className='feature-2-LP3-section'>
            <div className='feature-2-LP3'>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className='header-container'
                >
                    {/* <div className='header-container'> */}
                    <h1 className='header'>
                        Access <span style={{ color: '#2A71FA' }}>Elite Customer Service</span> Talent Globally
                    </h1>
                    <p className='sub-header'>
                        Our global talent acquisition process combines cutting-edge AI technology with extensive human expertise to set a new standard in customer service staffing.
                    </p>
                </motion.div>
                {/* </div> */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className='LP3F2-svgs-container'
                >
                    <motion.div className='left' variants={itemVariants}>
                        <CollapsibleCards />
                    </motion.div>
                    <motion.div className='right' variants={itemVariants}>
                        <img className='img-1' src={LP3F2CustCard} width={277} height={254} />
                        <img className='img-2' src={LP3F2World} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Feature2LP3;
