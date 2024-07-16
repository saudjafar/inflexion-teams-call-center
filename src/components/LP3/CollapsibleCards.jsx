import React, { useState } from 'react';
import { Collapse } from 'antd';
import '../../styles/LP3/CollapsibleCards.scss';
import ic01 from '../../assets/svgs/01.svg';
import ic02 from '../../assets/svgs/02.svg';
import ic03 from '../../assets/svgs/03.svg';

const { Panel } = Collapse;

const HoverCollapse = () => {
    const panelData = [
        {
            headerImg: ic01,
            header: 'Global Talent Pool',
            subtext: 'We’ve developed an extensive network of customer service professionals from around the world. Our recruiters identify and vet top-tier talent to ensure we provide the best customer support agents for our clients.'
        },
        {
            headerImg: ic02,
            header: 'AI-Powered Vetting',
            subtext: 'Our extensive vetting process includes AI-driven resume screening, human interviews and live assessments. We’ve built proprietary AI recruitment tools ensures candidates possess the skills to deliver 7-star service.'
        },
        {
            headerImg: ic03,
            header: 'Continuous Training & Development',
            subtext: 'Our rigorous training program equips agents with the latest AI tools, industry best practices, and client-specific knowledge, ensuring they can provide exceptional customer experiences from day one.'
        },
    ];

    const [activeKey, setActiveKey] = useState([]);

    const handleMouseEnter = key => {
        setActiveKey([key]);
    };

    const handleMouseLeave = () => {
        setActiveKey([]);
    };

    const generatePanelHeader = (headerImg, title, subtext) => (
        <div className='collapse-header-container'>
            <img src={headerImg} alt="" className='collapse-header-img' />
            <div className='collapse-heading'>{title}</div>
            <div style={{ display: 'none' }}>{subtext}</div>
        </div>
    );

    return (
        <Collapse className='collapse-container' activeKey={activeKey} bordered={false} ghost>
            {panelData.map((panel, index) => (
                <Panel
                    className='collapse-panel'
                    header={generatePanelHeader(panel.headerImg, panel.header, panel.subtext)}
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index.toString())}
                    onMouseLeave={handleMouseLeave}
                    showArrow={false}
                >
                    <div className='collapse-subtext'>{panel.subtext}</div>
                </Panel>
            ))}
        </Collapse>
    );
};

export default HoverCollapse;
