import React from 'react'
import '../../styles/LP1/Features.scss';
import { Tabs } from 'antd';
import tab1Icons from '../../assets/svgs/tab1-icons.svg'
const Feature2 = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: <button className='tab-btn'>AI/Chat</button>,
            children: <div style={{
                marginTop: '3.75rem', display: 'flex'
            }}> <img src={tab1Icons} style={{ maxWidth: '100%', height: 'auto' }} /></div >,
        },
        {
            key: '2',
            label: <button className='tab-btn'>VoIP</button>,
            children: <div style={{ color: 'white' }}>Content of Tab Pane 2</div>,

        },
        {
            key: '3',
            label: <button className='tab-btn'>Helpdesk</button>,
            children: <div style={{ color: 'white' }}>Content of Tab Pane 3</div>,

        },
    ];
    return (
        <section className='feature-2-section'>
            <div className='feature-2'>
                <div className='header'>
                    <h2 className='headline'>Effortless Integration, Exceptional Results</h2>
                    <span className='subtext'>Our agents work as an extension of your team. We pair world-class service with transparency, enabling you to deliver exceptional, personalized interactions at every touchpoint.</span>
                </div>
                <div className='icon-tabs'>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
            </div>
        </section>
    )
}

export default Feature2