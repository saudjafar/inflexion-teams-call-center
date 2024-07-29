import React, { useState } from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import { Button, Input, Row, Col } from 'antd';
import checkIcon from '../../assets/svgs/check-whiteblu.svg'
import helpIcon from '../../assets/svgs/help-icon.svg'

const { TextArea } = Input;

const Modal4 = ({ nextPage, previousPage }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cellNumber, setCellNumber] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cellNumber: ''
    });

    const handleNextPage = () => {
        const newErrors = {};

        if (!firstName) {
            newErrors.firstName = 'Please enter your first name.';
        }

        if (!lastName) {
            newErrors.lastName = 'Please enter your last name.';
        }

        if (!email) {
            newErrors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!cellNumber) {
            newErrors.cellNumber = 'Please enter your cell number.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            nextPage();
        }
    };

    return (
        <div className='modal-container modal-4-container'>
            <div className='modal4-left'>
                <div className='l-1'>
                    <h1 className='header'>
                        Outsource a world-class customer service team with Inflexion Teams
                    </h1>

                    <div className='l1-grid-container'>
                        <Row gutter={[28, 28]} className='grid-row'>
                            <Col className='grid-col' span={12} >
                                <div className='grid-cell'>
                                    <img src={checkIcon} />
                                    <span className='text'>Exceptional Quality</span>
                                </div>
                            </Col>
                            <Col className='grid-col' span={12} >
                                <div className='grid-cell'>
                                    <img src={checkIcon} />
                                    <span className='text'>End-to-End Service</span>
                                </div>
                            </Col>
                            <Col className='grid-col' span={12} >
                                <div className='grid-cell'>
                                    <img src={checkIcon} />
                                    <span className='text'>AI-Powered</span>
                                </div>
                            </Col>
                            <Col className='grid-col' span={12} >
                                <div className='grid-cell'>
                                    <img src={checkIcon} />
                                    <span className='text'>Cost-Effective</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='l-2'>
                    <h1 className='header'>Access Inflexion Teams' 4M+ pool of global talent and cutting-edge AI technology.</h1>
                    <p className='subtext'>Here's what you can expect from us:</p>
                    <div className='l2-list-container'>
                        <span className='list-item'><img src={checkIcon} />Bespoke quotation in 72 hours based on your specific needs</span>
                        <span className='list-item'><img src={checkIcon} />A tailored AI and remote team implementation strategy</span>
                        <span className='list-item'><img src={checkIcon} />Detailed consultation on optimizing your customer support</span>
                        <span className='list-item'><img src={checkIcon} />Free onboarding and training of agents customized to your company</span>

                    </div>
                </div>
            </div>
            <div className='modal4-right'>
                <div className='page-no'><span className='curr-page'>4 </span>/ 4</div>
                <h1 className='modal4-r-heading'>
                    Level up your customer service today.
                </h1>

                <div className='modal4-input-container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='ip1'>
                            <h1 className='input-header'>
                                First Name
                            </h1>
                            <Input
                                className='input-element'
                                type='text'
                                placeholder='Your First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className='error-text'>{errors.firstName}</div>}
                        </div>
                        <div className='ip1'>
                            <h1 className='input-header'>
                                Last Name
                            </h1>
                            <Input
                                className='input-element'
                                type='text'
                                placeholder='Your Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className='error-text'>{errors.lastName}</div>}
                        </div>
                    </div>
                    <div className='ip2'>
                        <h1 className='input-header'>
                            Email Address
                        </h1>
                        <Input
                            className='input-element'
                            type='text'
                            placeholder='Your Business Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className='error-text'>{errors.email}</div>}
                    </div>

                    <div className='ip3'>
                        <h1 className='input-header'>
                            Cell Number<strong>*</strong> <img src={helpIcon} />
                        </h1>
                        <Input
                            className='input-element'
                            type='text'
                            placeholder='Your Cell Number'
                            value={cellNumber}
                            onChange={(e) => setCellNumber(e.target.value)}
                        />
                        {errors.cellNumber && <div className='error-text'>{errors.cellNumber}</div>}
                    </div>

                </div>

                <p className='disclaimer-text'>
                    I agree to be contacted by Inflexion Teams about their managed customer service solutions. We respect your privacy and will only use your information to reach out about our services.
                </p>

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
    )
}

export default Modal4;
