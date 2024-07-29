import React from 'react'
import { Row, Col } from 'antd';
import checkIcon from '../../assets/svgs/checkMark-green.svg';
const Modal5 = () => {
    const gridStyle = {
        padding: '1.5rem',
        margin: '0.4rem',
        borderRadius: '1.1875rem',
        background: 'rgba(255, 255, 255, 0.10)'
    };
    return (
        <div className='modal-container modal-5-container'>
            <div className='modal5-left'>
                <div className='l-1'>
                    <p className='l1-text'>
                        Remember, our service comes with zero, risk - free consultation, training, and a money-back guarantee. We're committed to delivering exceptional, AI-enhanced customer support that drives your business forward.
                    </p>
                </div>
                <div className='l-2'>
                    <span className='l2-text'>
                        We've revolutionized customer support for companies across industries.
                    </span>
                    <div className='l2-grid'>
                        <Row className='grid-row'>
                            <Col span={11} className='grid-col' style={{ background: '#FFC7ED' }}>
                                <h1 className='metric-val' style={{ color: '#992473' }}>4M+</h1>
                                <span className='metric-text' style={{ color: '#992473' }}>Global Talent</span>
                            </Col>
                            <Col span={11} className='grid-col' style={{ background: '#FFD3B6' }}>
                                <h1 className='metric-val' style={{ color: '#8D4516' }}>50+</h1>
                                <span className='metric-text' style={{ color: '#8D4516' }}>Years Exp</span>
                            </Col>
                            <Col span={11} className='grid-col' style={{ background: '#ADF7B6' }}>
                                <h1 className='metric-val' style={{ color: '#1E5D25' }}>$4bn</h1>
                                <span className='metric-text' style={{ color: '#1E5D25' }}>Value</span>
                            </Col>
                            <Col span={11} className='grid-col' style={{ background: '#70DCF3' }}>
                                <h1 className='metric-val' style={{ color: '#185562' }}>30+</h1>
                                <span className='metric-text' style={{ color: '#185562' }}>Years AI Exp</span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className='modal5-right'>
                <img src={checkIcon} width={56} />
                <h1 className='header'>
                    Thank you for choosing Inflexion Teams! We're excited to help you revolutionize your customer support.
                </h1>

                <div className='whats-next-container'>
                    <h4 className='header'>What's Next:</h4>
                    <ol className='list-container'>
                        <li className='list-item'>Our experts will review your submission and reach out within 48 hours.</li>
                        <li className='list-item'>We'll schedule a detailed consultation to discuss AI integration and team optimization.</li>
                        <li className='list-item'>You'll receive a free, no-obligation quotation tailored to your needs.</li>
                        <li className='list-item'>If you decide to proceed, we'll begin the free onboarding and training process.</li>

                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Modal5