import React from 'react';
import '../../styles/LP3/FeaturesLP3.scss';
import iconHandshake from '../../assets/svgs/Frame.svg';
import iconAI from '../../assets/svgs/Group 48095540.svg';
import iconOutsource from '../../assets/svgs/Frame-1.svg';
import { Button, Card } from 'antd';
import arrowRightBlu from '../../assets/svgs/arrow-blue.svg';
import arrowRightWhite from '../../assets/svgs/arrow-white.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature1LP3 = () => {
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

    const cardsData = [
        {
            imgSrc: iconOutsource,
            header: (
                <>
                    Premium <br /> Outsourcing
                </>
            ),
            subHeader: 'Get access to exceptional talent trained on cutting-edge AI technology.',
            points: [
                'End-to-end managed customer support',
                'Extensively trained and vetted agents',
                'AI-augmented customer service',
                'Specialized expertise & scalability',
                'Omni-channel support capabilities',
            ],
        },
        {
            imgSrc: iconAI,
            header: 'AI-Powered Customer Exp',
            subHeader: (
                <>
                    Cutting-edge AI technology to <br /> enhance your CX team's capabilities.
                </>
            ),
            points: [
                'Real-time agent assistance',
                'AI-driven knowledge base integration',
                'Sentiment Analysis and intelligent routing',
                'Accent neutralization',
                'AI Noise Reduction',
            ],
        },
        {
            imgSrc: iconHandshake,
            header: 'Done For You Customer Support',
            subHeader: 'Experience the magic of effortless customer service implementation.',
            points: [
                'End-to-end managed customer support',
                'Extensively trained and vetted agents',
                'AI-augmented customer service',
                'Specialized expertise & scalability',
                'Omni-channel support capabilities',
            ],
        },
    ];

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

    const CardElement = ({ imgSrc, header, subHeader, points }) => {
        return (
            <motion.div variants={itemVariants}>
                <Card className='card'>
                    <div className='card-upper'>
                        <img className='upper-img' src={imgSrc} alt={header} width={56} />
                        <h2 className='header'>{header}</h2>
                        <p className='sub-headline'>{subHeader}</p>
                    </div>
                    <div className='card-lower'>
                        <ul>
                            {points.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </motion.div>
        );
    };

    return (
        <section className='feature-1-LP3-section'>
            <div className='feature-1-LP3'>
                <div className='header-container'>
                    <span className='pre-header'>REVOLUTIONIZING CUSTOMER SUPPORT</span>
                    <h1 className='header'>
                        Hire the <span style={{ color: '#2A71FA' }}>Best Customer Support Team</span> You Didn't Know You Could Afford
                    </h1>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className='feature-1-cards-container'
                >
                    {cardsData.map((card, index) => (
                        <CardElement
                            key={index}
                            imgSrc={card.imgSrc}
                            header={card.header}
                            subHeader={card.subHeader}
                            points={card.points}
                        />
                    ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Button
                        className='book-a-call-cta'
                        onClick={() => window.open('https://calendly.com/james-inflexion/inflexion-teams-call', '_blank')}
                    >
                        Book a Call
                        <img className='arrow-icon' src={arrowRightWhite} />
                        <img className='arrow-icon-hover' src={arrowRightBlu} />
                    </Button>
                </motion.div>

                <div className='hr-line' style={{ width: '100%', height: '2px', borderBottom: '1px solid #CDCDCD' }}></div>
            </div>
        </section>
    );
};

export default Feature1LP3;
