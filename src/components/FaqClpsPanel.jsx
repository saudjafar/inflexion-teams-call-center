import React, { useState } from 'react';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import '../styles/HowItWorks/FaqClpsPanel.scss';
const { Panel } = Collapse;

const FaqClpsPanel = () => {

    const data = [
        { header: "How soon can I have my CX team set up?", subtext: "This is details for Header 1" },
        { header: "How is quality ensured in my customer service agents?", subtext: "This is details for Header 2" },
        { header: "How will my team integrate with existing systems?", subtext: "This is details for Header 3" },
        { header: "How is AI in used in the customer service operations?", subtext: "This is details for Header 4" },
        { header: "What makes Inflexion Teams different from other BPOs?", subtext: "This is details for Header 5" },
        { header: "How will my team stay updated with the latest technologies?", subtext: "This is details for Header 6" }
    ];
    const [activeKey, setActiveKey] = useState([0]);

    const onPanelChange = key => {
        setActiveKey(key);
    };

    return (
        <Collapse className='faq-collapse-container' onChange={onPanelChange} activeKey={activeKey} accordion>
            {data.map((item, index) => (
                <Panel
                    className='faq-collapse-panel'
                    showArrow={false}
                    header={
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {item.header}
                            {activeKey.includes(index.toString()) ? <MinusOutlined /> : <PlusOutlined />}
                        </div>
                    }
                    key={index.toString()}
                >
                    {item.subtext}
                </Panel>
            ))}
        </Collapse>
    );
};

export default FaqClpsPanel