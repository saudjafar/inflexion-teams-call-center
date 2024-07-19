import React from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import checkIcon from '../../assets/svgs/check-whitebg.svg'
import { Row, Col } from 'antd';
const Modal123Left = () => {
    const gridStyle = {
        padding: '1.5rem',
        margin: '0.4rem',
        borderRadius: '1.1875rem',
        background: 'rgba(255, 255, 255, 0.10)'
    };
    return (
        <div className='modal123-left'>
            <div className='l-1'>
                <h1 className='header'>Get a free quote</h1>
                <div className='l1-list-container'>
                    <span className='list-item'><img src={checkIcon} />Save 70% on employment costs.</span>
                    <span className='list-item'><img src={checkIcon} />Enhance customer service & integrate cutting-edge AI. </span>
                    <span className='list-item'><img src={checkIcon} />Partner with Inflexion Teams for unparalleled support solutions.</span>
                </div>
            </div>
            <div className='l-2'>
                <span className='l2-text'>
                    We've revolutionized customer support for companies across industries.
                </span>
                <div className='l2-grid'>
                    <Row className='grid-row'>
                        <Col span={11} className='grid-col' style={gridStyle}>
                            <h1 className='metric-val'>4M+</h1>
                            <span className='metric-text'>Global Talent</span>
                        </Col>
                        <Col span={11} className='grid-col' style={gridStyle}>
                            <h1 className='metric-val'>50+</h1>
                            <span className='metric-text'>Years Exp</span>
                        </Col>
                        <Col span={11} className='grid-col' style={gridStyle}>
                            <h1 className='metric-val'>$4bn</h1>
                            <span className='metric-text'>Value</span>
                        </Col>
                        <Col span={11} className='grid-col' style={gridStyle}>
                            <h1 className='metric-val'>30+</h1>
                            <span className='metric-text'>AI Exp</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Modal123Left