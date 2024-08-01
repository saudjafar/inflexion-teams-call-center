import React, { useState } from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import { Row, Col, Button } from 'antd';
import Modal123Left from './Modal123Left';
const Modal1 = ({ nextPage, previousPage }) => {

    const [selectedCell, setSelectedCell] = useState(null);
    const [showError, setShowError] = useState(false);

    const handleCellClick = (cellId) => {
        setSelectedCell(cellId);
        setShowError(false);
    };
    const handleNextPageCall = () => {
        if (selectedCell != null) {
            nextPage();
        }
        else {
            setShowError(true)
        }
    }
    const agentSizeArray = ['1 - 5 agents', '6 - 15 agents', '16 - 30 agents', '31 - 50 agents', '50+ agents', 'Other']

    const agentValCellStyle = (cellId) => ({
        borderRadius: '2.5rem',
        border: selectedCell === cellId ? '1px solid black' : '1px solid #D5D5D5',
        padding: '1.31rem 1.25rem',
        color: selectedCell === cellId ? 'white' : '#3E3E3E',
        background: selectedCell === cellId ? '#030303' : 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        fontSize: '1.125rem',
        fontFamily: 'Helvetica Now Display',
        fontWeight: '600'
    });

    return (
        <div className='modal-container modal-1-container'>
            <Modal123Left />
            <div className='modal1-right'>
                {/* <div className='page-no'><span className='curr-page'>1 </span>/ 4</div> */}

                <h1 className='modal1-r-heading'>
                    Let's understand your customer service needs
                </h1>

                <p className='modal1-r-subtext'>
                    How many customer support agents are you looking to engage?
                </p>

                <div className='agent-val-grid' style={{ marginTop: '2.56rem' }}>
                    <Row gutter={[16, 16]}>
                        {agentSizeArray.map((agentSize, index) => (
                            <Col key={index}
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={12}
                                xxl={8}
                                onClick={() => handleCellClick(index)} >
                                <div style={agentValCellStyle(index)} className='agent-val-cell'>
                                    {agentSize}
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <span className='error-text' style={{ display: ` ${showError ? 'block' : 'none'}` }}>
                        Please select a range of agent team size to proceed.
                    </span>
                </div>

                <div className='cta-container'>
                    <Button className='begin-cta' onClick={handleNextPageCall}>
                        Let's Begin <img src={arrowWhite} className='arrow-icon' /><img src={arrowRightBlue} className='arrow-icon-hover' />
                    </Button>

                    <Button className='back-cta' onClick={previousPage}>
                        Back
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal1