import React from 'react';
import { Link, Element } from 'react-scroll';
import '../styles/HowItWorks/OurProcessScrollMenu.scss';
import scrollImg1 from '../assets/imgs/process1.png';
import scrollImg2 from '../assets/imgs/process2.png';
import scrollImg3 from '../assets/svgs/process3.svg';
import scrollImg4 from '../assets/imgs/process4.png';
import scrollImg5 from '../assets/imgs/process5.png';
import scrollImg6 from '../assets/imgs/process6.png';

const data = [
    {
        id: "1",
        title: "Initial Consultation",
        titleCard: "Initial Consultation",
        subtext: "Schedule a call with one of our growth consultants to discuss your customer support hiring needs. We'll explore your business goals, challenges, and requirements to create a tailored solution.",
        imgSrc: scrollImg1
    },
    {
        id: "2",
        title: "Strategy Development",
        titleCard: "Customized Strategy Development",
        subtext: "Based on your needs, we'll develop a customized customer service strategy. This includes determining the number of agents needed, the specific functions they'll perform, and how we'll integrate AI technology to enhance your customer service operations.",
        imgSrc: scrollImg2
    },
    {
        id: "3",
        title: "Setup & integration",
        titleCard: "AI Integration & Setup",
        subtext: "We'll integrate cutting-edge AI technology into your customer service operations. This includes setting up agent-assist tools, real-time transcription, and other AI-powered features to enhance agent performance and customer satisfaction.",
        imgSrc: scrollImg3
    },
    {
        id: "4",
        title: "Talent Sourcing & Training",
        titleCard: "Talent Sourced & Training",
        subtext: "Our recruitment team sources and vets top customer service talent. Candidates pass extensive testing and receive comprehensive training on industry best practices, AI tools, and your company policies.",
        imgSrc: scrollImg4
    },
    {
        id: "5",
        title: "Deployment &  Support",
        titleCard: 'Team Deployment & Ongoing Support',
        subtext: "After training and deploying AI systems, we’ll deploy your customer service agents. We provide ongoing training, quality assurance, and performance monitoring. Our managers oversee your account and handle replacements or additional training.",
        imgSrc: scrollImg5
    },
    {
        id: "6",
        title: "Continuous Improvement",
        titleCard: 'Continuous Improvement',
        subtext: "We'll continuously enhance your customer service operations, keeping up with technology and industry trends. Expect regular updates and suggestions for optimization.",
        imgSrc: scrollImg6
    },
];

const OurProcessScrollMenu = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <div style={{ width: '20%', color: '#fff' }}>
                {data.map(item => (
                    <Link
                        className='scroll-link'
                        key={item.id}
                        to={item.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        style={{ padding: '10px', display: 'block', cursor: 'pointer' }}
                    >
                        <span>{item.id}</span>
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
            <div style={{ width: '80%', overflowY: 'auto', color: 'white' }}>
                {data.map(item => (
                    <Element key={item.id} name={item.id} style={{ padding: '0px 20px 20px' }}>
                        <h2 style={{ margin: '0' }}>{item.titleCard}</h2>
                        <p>{item.subtext}</p>
                        <img src={item.imgSrc} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    </Element>
                ))}
            </div>
        </div>
    );
};

export default OurProcessScrollMenu;
