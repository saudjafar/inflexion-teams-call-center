import React from 'react'
import '../styles/Services.scss';
import { Row, Col } from 'antd';
import GridElement from './GridElement';
import iconConnect from '../assets/svgs/icon-connect.svg';
import iconEarn from '../assets/svgs/icon-earn.svg';
import iconPrivacy from '../assets/svgs/icon-privacy.svg';
import iconGlobal from '../assets/svgs/icon-global.svg';
import iconIntegration from '../assets/svgs/icon-integrations.svg';
import iconSupport from '../assets/svgs/Support.svg';


const Services = () => {
    const headlines = [
        "24/7 Customer Support",
        "Tech Assistance",
        "Data Management",
        "Trust & Safety Moderation",
        "Back Office Support",
        "Flexible outsourcing designed to grow with you"
    ]
    const subtexts = [
        "Round-the-clock availability",
        "Rapid response times, escalation management, and In-depth technical expertise",
        "Transform raw data into actionable insights for smarter, faster decisions.",
        "Foster a thriving online community while ensuring trust and safety.",
        "Streamline operations and focus on core business objectives."
    ]
    const gridElements = [
        <GridElement imgSrc={iconConnect} headline={headlines[0]} subtext={subtexts[0]} />,
        <GridElement imgSrc={iconEarn} headline={headlines[1]} subtext={subtexts[1]} />,
        <GridElement imgSrc={iconGlobal} headline={headlines[2]} subtext={subtexts[2]} />,
        <GridElement imgSrc={iconIntegration} headline={headlines[3]} subtext={subtexts[3]} />,
        <GridElement imgSrc={iconPrivacy} headline={headlines[4]} subtext={subtexts[4]} />,
        <GridElement isLast={true} imgSrc={iconSupport} headline={headlines[5]} subtext={subtexts[0]} />

    ];
    return (
        <section className='services-section'>
            <div className='services'>
                <div className='services-header'>
                    <h1 className='headline'>Our Services</h1>
                    <span className='subtext'>We build you an on-brand, on-demand support team in a click.</span>
                </div>

                <div className="services-grid">
                    <Row gutter={[36, 36]} justify="space-between">
                        {gridElements.map((element, index) => (
                            <Col
                                key={index}
                                xs={{ span: 24 }}
                                sm={{ span: 12 }}
                                md={{ span: 12 }}
                                lg={{ span: 12 }}
                                xl={{ span: 8 }}
                                xxl={{ span: 8 }}
                                className="grid-element"
                            >
                                {element}
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default Services