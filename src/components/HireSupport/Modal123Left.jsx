import React from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import checkIcon from '../../assets/svgs/check-whiteblu.svg'
import { Row, Col } from 'antd';
const Modal123Left = () => {

    return (
        <div className='modal123-left'>
            <div className='l-1'>
                <h1 className='header'>Get a Free Quote</h1>
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
                        <Col
                            xs={11}
                            sm={11}
                            md={11}
                            lg={5}
                            xl={11}
                            xxl={11}
                            className='grid-col' style={{ background: '#FFC7ED' }}>
                            <h1 className='metric-val' style={{ color: '#992473' }}>4M+</h1>
                            <span className='metric-text' style={{ color: '#992473' }}>Global Talent</span>
                        </Col>
                        <Col xs={11}
                            sm={11}
                            md={11}
                            lg={5}
                            xl={11}
                            xxl={11} className='grid-col' style={{ background: '#FFD3B6' }}>
                            <h1 className='metric-val' style={{ color: '#8D4516' }}>50+</h1>
                            <span className='metric-text' style={{ color: '#8D4516' }}>Years Exp</span>
                        </Col>
                        <Col xs={11}
                            sm={11}
                            md={11}
                            lg={5}
                            xl={11}
                            xxl={11} className='grid-col' style={{ background: '#ADF7B6' }}>
                            <h1 className='metric-val' style={{ color: '#1E5D25' }}>$4bn</h1>
                            <span className='metric-text' style={{ color: '#1E5D25' }}>Value</span>
                        </Col>
                        <Col xs={11}
                            sm={11}
                            md={11}
                            lg={5}
                            xl={11}
                            xxl={11} className='grid-col' style={{ background: '#70DCF3' }}>
                            <h1 className='metric-val' style={{ color: '#185562' }}>30+</h1>
                            <span className='metric-text' style={{ color: '#185562' }}>Years AI Exp</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Modal123Left