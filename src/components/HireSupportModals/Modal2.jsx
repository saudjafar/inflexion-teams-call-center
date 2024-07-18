import React, { useState } from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import { Row, Col, Button, Select } from 'antd';
import Modal123Left from './Modal123Left';


const Modal2 = ({ nextPage, previousPage }) => {

    const [selectedCell, setSelectedCell] = useState(null);

    const handleCellClick = (cellId) => {
        setSelectedCell(cellId);
    };

    const companySizeArray = ['1-10', '11-50', '51-100', '101 - 250', '251-500', '500+']

    const companyValCellStyle = (cellId) => ({
        borderRadius: '2.5rem',
        border: selectedCell === cellId ? '1px solid black' : '1px solid #D5D5D5',
        padding: '1.31rem 1.25rem',
        color: selectedCell === cellId ? 'white' : '#3E3E3E',
        background: selectedCell === cellId ? 'black' : 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        fontSize: '1.125rem',
        fontWeight: '600'
    });

    return (
        <div className='modal-container modal-2-container'>
            <Modal123Left />
            <div className='modal2-right'>
                <div className='page-no'><span className='curr-page'>2 </span>/ 3</div>
                <h1 className='modal2-r-heading'>
                    Tell us about your company
                </h1>

                <p className='modal2-r-subtext'>
                    What's the size of your organization?
                </p>

                <div className='company-val-grid' style={{ marginTop: '2.56rem' }}>
                    <Row gutter={[16, 16]}>
                        {companySizeArray.map((companySize, index) => (
                            <Col key={index} span={8} onClick={() => handleCellClick(index)}>
                                <div style={companyValCellStyle(index)}>
                                    {companySize}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div className='modal2-dropdown-container'>
                    <h2 className='dropdown-heading'>What industry does your business operate in?</h2>

                    <Select
                        className='select-container'
                        placeholder='Select Sector'
                        // onChange={handleChange}
                        options={[
                            {
                                value: 'Technology',
                                label: 'Technology',
                            },
                            {
                                value: 'Option2',
                                label: 'Option2',
                            },
                            {
                                value: 'Option3',
                                label: 'Option3',
                            },
                        ]}
                    />
                </div>

                <div className='cta-container'>
                    <Button className='begin-cta' onClick={nextPage}>
                        Next <img src={arrowWhite} className='arrow-icon' /><img src={arrowRightBlue} className='arrow-icon-hover' />
                    </Button>

                    <Button className='back-cta' onClick={previousPage}>
                        Back
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal2