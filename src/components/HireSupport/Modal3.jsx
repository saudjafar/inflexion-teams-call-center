import React, { useState } from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import { Button, Input } from 'antd';
import Modal123Left from './Modal123Left';

const { TextArea } = Input;

const Modal3 = ({ nextPage, previousPage }) => {
    const [customerSupportType, setCustomerSupportType] = useState('');
    const [primaryGoal, setPrimaryGoal] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [errors, setErrors] = useState({
        customerSupportType: '',
        primaryGoal: ''
    });

    const handleNextPage = () => {
        const newErrors = {};

        if (!customerSupportType) {
            newErrors.customerSupportType = 'Please specify the type of customer support you are seeking.';
        }

        if (!primaryGoal) {
            newErrors.primaryGoal = 'Please specify your primary goal for outsourcing customer service.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            nextPage();
        }
    };

    return (
        <div className='modal-container modal-3-container'>
            <Modal123Left />
            <div className='modal3-right'>
                <div className='page-no'><span className='curr-page'>3 </span>/ 4</div>
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
                            value={customerSupportType}
                            onChange={(e) => setCustomerSupportType(e.target.value)}
                        />
                        {errors.customerSupportType && <div className='error-text'>{errors.customerSupportType}</div>}
                    </div>
                    <div className='ip2'>
                        <h1 className='input-header'>
                            What's your primary goal for outsourcing customer service?
                        </h1>
                        <Input
                            className='input-element'
                            type='text'
                            placeholder='E.g, Improve CSAT, reduce costs, 24/7 support'
                            value={primaryGoal}
                            onChange={(e) => setPrimaryGoal(e.target.value)}
                        />
                        {errors.primaryGoal && <div className='error-text'>{errors.primaryGoal}</div>}
                    </div>

                    <div className='ip3'>
                        <h1 className='input-header'>
                            Anything else you’d like to discuss?
                        </h1>
                        <TextArea
                            rows={3}
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                        />
                    </div>

                </div>

                <div className='cta-container'>
                    <Button className='begin-cta' onClick={handleNextPage}>
                        Submit <img src={arrowWhite} className='arrow-icon' /><img src={arrowRightBlue} className='arrow-icon-hover' />
                    </Button>

                    <Button className='back-cta' onClick={previousPage}>
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal3;
