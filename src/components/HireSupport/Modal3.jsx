import React, { useState } from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import { Button, Input } from 'antd';
import Modal123Left from './Modal123Left';
const { TextArea } = Input;

const Modal3 = ({ nextPage, previousPage }) => {
    return (
        <div className='modal-container modal-3-container'>
            <Modal123Left />
            <div className='modal3-right'>
                <div className='page-no'><span className='curr-page'>3 </span>/ 3</div>
                <h1 className='modal3-r-heading'>
                    Specific Requirements
                </h1>

                <div className='modal3-input-container'>
                    <div className='ip1'>
                        <h1 className='input-header'>
                            What type of customer support are you seeking?
                        </h1>
                        <Input
                            className='input-element'
                            type='text'
                            placeholder='E.g, omni-channel, technical support, product inquiries'
                        />
                    </div>
                    <div className='ip2'>
                        <h1 className='input-header'>
                            What's your primary goal for outsourcing customer service?
                        </h1>
                        <Input
                            className='input-element'
                            type='text'
                            placeholder='E.g, Improve CSAT, reduce costs, 24/7 support'
                        />
                    </div>

                    <div className='ip3'>
                        <h1 className='input-header'>
                            Anything else you’d like to discuss?
                        </h1>
                        <TextArea
                            rows={4}
                        />
                    </div>

                </div>


                <div className='cta-container'>
                    <Button className='begin-cta' onClick={nextPage}>
                        Submit <img src={arrowWhite} className='arrow-icon' /><img src={arrowRightBlue} className='arrow-icon-hover' />
                    </Button>

                    {/* <Button className='back-cta' onClick={previousPage}>
                        Back
                    </Button> */}
                </div>
            </div>
        </div>
    )
}

export default Modal3