import React, { useEffect, useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Menu, Dropdown, Button } from 'antd';
import downArrow from '../assets/svgs/down-arrow-white.svg';
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
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1200);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        Events.scrollEvent.register('begin', function () { });
        Events.scrollEvent.register('end', function () { });
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const menu = (
        <Menu>
            {data.map(item => (
                <Menu.Item key={item.id}>
                    <Link
                        className='scroll-link'
                        to={item.id}
                        spy={true}
                        smooth={true}
                        duration={750}
                        containerId="panel-right-container"
                        offset={-7}
                        onClick={() => setDropdownVisible(false)}
                    >
                        {item.title}
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );


    return (
        <div className='scroll-links-parent-container'>
            {isMobile ? (
                <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    className='dropdown-menu'
                    open={dropdownVisible}
                    onOpenChange={(flag) => setDropdownVisible(flag)}
                >
                    <Button onClick={() => setDropdownVisible(!dropdownVisible)}>
                        Jump to <img src={downArrow} />
                    </Button>
                </Dropdown>
            ) : (
                <div className='scroll-links-container'>
                    {data.map(item => (
                        <Link
                            className='scroll-link'
                            key={item.id}
                            to={item.id}
                            spy={true}
                            smooth={true}
                            duration={750}
                            containerId="panel-right-container"
                            offset={-7}
                        >
                            <div className='index-container'><span className='index'>{item.id}</span></div>
                            <span className='title'>{item.title}</span>
                        </Link>
                    ))}
                </div>
            )}
            <div className='panel-right-container' id="panel-right-container">
                {data.map(item => (
                    <Element className='panel-right' key={item.id} name={item.id}>
                        <h2 className='header'>{item.titleCard}</h2>
                        <p className='sub-text'>{item.subtext}</p>
                        <img className='panel-img' src={item.imgSrc} alt={item.title} width={704} />
                    </Element>
                ))}
            </div>
        </div>
    );
};

export default OurProcessScrollMenu;
