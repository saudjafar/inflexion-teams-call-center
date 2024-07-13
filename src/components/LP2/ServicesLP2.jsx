import React from 'react'
import '../../styles/LP2/ServicesLP2.scss';
import { Row, Col } from 'antd';
import GridElementLP2 from './GridElementLP2';
import iconConnect2 from '../../assets/svgs/icon-connect2.svg';
import iconPage1 from '../../assets/svgs/icon-page1.svg';
import iconPrivacy from '../../assets/svgs/icon-privacy.svg';
import iconGlobal from '../../assets/svgs/icon-global.svg';
import iconIntegration from '../../assets/svgs/icon-integrations.svg';

const ServicesLP2 = () => {
    const headlines = [
        "24/7 Customer Support",
        "Tech Assistance",
        "Data Management",
        "Trust & Safety Moderation",
        "Back Office Support",
    ]
    const subtexts = [
        "Round-the-clock availability",
        "Rapid response times, escalation management, and In-depth technical expertise",
        "Transform raw data into actionable insights for smarter, faster decisions.",
        "Foster a thriving online community while ensuring trust and safety.",
        "Streamline operations and focus on core business objectives."
    ]
    const gridElements = [
        <GridElementLP2 imgSrc={iconConnect2} headline={headlines[0]} subtext={subtexts[0]} />,
        <GridElementLP2 imgSrc={iconPage1} headline={headlines[1]} subtext={subtexts[1]} />,
        <GridElementLP2 imgSrc={iconGlobal} headline={headlines[2]} subtext={subtexts[2]} />,
        <GridElementLP2 imgSrc={iconIntegration} headline={headlines[3]} subtext={subtexts[3]} />,
        <GridElementLP2 imgSrc={iconPrivacy} headline={headlines[4]} subtext={subtexts[4]} />,
    ];
    return (
        <section className='services-LP2-section'>
            <div className='services'>
                <h1 className='header'>
                    Our Services
                </h1>
                <div className="services-grid">
                    <Row gutter={[36, 36]} justify="space-around">
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

export default ServicesLP2