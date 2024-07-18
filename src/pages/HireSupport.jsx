import React, { useState } from 'react'
import '../styles/HireSupport/HireSupport.scss'
import HeaderLP3 from '../components/LP3/HeaderLP3'
import FooterLP3 from '../components/LP3/FooterLP3'
import freeTagIcon from '../assets/svgs/free-tag.svg'
import checkIcon from '../assets/svgs/check-whitebg.svg'
import { Button, Modal } from 'antd'
import outSourceImg from '../assets/svgs/outsourceImg.svg'
import Modal1 from '../components/HireSupportModals/Modal1'
import Modal2 from '../components/HireSupportModals/Modal2'
import Modal3 from '../components/HireSupportModals/Modal3'
import Modal4 from '../components/HireSupportModals/Modal4'
import Modal5 from '../components/HireSupportModals/Modal5'

const HireSupport = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage === 1) {
            setOpenModal(false);
        }
        else {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleSubmit = () => {
        console.log('Form submitted');
        setOpenModal(false); // Close the modal after submission
    };

    const renderPageContent = (page) => {
        switch (page) {
            case 1:
                return <Modal1 nextPage={nextPage} previousPage={previousPage} />;
            case 2:
                return <Modal2 nextPage={nextPage} previousPage={previousPage} />;
            case 3:
                return <Modal3 nextPage={nextPage} previousPage={previousPage} />;
            case 4:
                return <Modal4 nextPage={nextPage} previousPage={previousPage} />;
            case 5:
                return <Modal5 nextPage={nextPage} previousPage={previousPage} />;
            default:
                return <div>Content not found</div>;
        }
    };

    return (
        <div style={{ background: '#030303' }}>
            <HeaderLP3 />
            <section className='hire-support-section'>
                <section className='get-started-section'>
                    <div className='get-started'>
                        <h1 className='header'>
                            Simplify your customer service. Consult with AI experts, free.
                        </h1>
                        <div className='get-started-details'>
                            <div className='details-text'>
                                <div className='text text-1'>
                                    <img src={freeTagIcon} style={{ position: 'absolute', top: '-5rem', right: '2rem' }} />
                                    <h3 className='heading'>Request your<br /> complimentary quote</h3>
                                    <p className='sub-text'>
                                        Hire end-to-end customer support and save up to 70% on staff costs. Speak with our outsourcing specialists to discover how Inflexion Teams can revolutionize your customer experience.
                                    </p>
                                </div>
                                <div className='text text-2'>
                                    <h4 className='heading'>
                                        Why partner with Inflexion Teams?
                                    </h4>
                                    <div className='list-container'>
                                        <span className='list-item'><img src={checkIcon} />Access AI expertise from team of ex-Google, Yahoo & PhDs</span>
                                        <span className='list-item'><img src={checkIcon} />Free training and onboarding of all agents</span>
                                        <span className='list-item'><img src={checkIcon} />No risk and 1-week money back guarantee</span>

                                    </div>
                                </div>
                            </div>
                            <div className='popup-cta-container'>
                                <h2 className='heading'>
                                    Get Started
                                </h2>
                                <div className='outsource-img-container'>
                                    <p className='outsource-img-text'>
                                        How many staff do you need to outsource?
                                    </p>
                                    <img src={outSourceImg} />
                                </div>

                                <Button className="start-cta" onClick={() => { setOpenModal(true); setCurrentPage(1); }}>
                                    Start
                                </Button>
                                <Modal
                                    className='test-name'
                                    centered
                                    open={openModal}
                                    onOk={() => setOpenModal(false)}
                                    onCancel={() => setOpenModal(false)}
                                    footer={null}
                                // footer={[
                                //     currentPage < totalPages ? (
                                //         <Button key="next" onClick={nextPage}>
                                //             Next
                                //         </Button>
                                //     ) : (
                                //         <Button key="submit" type="primary" onClick={handleSubmit}>
                                //             Submit
                                //         </Button>
                                //     )
                                // ]}
                                >
                                    {renderPageContent(currentPage)}
                                </Modal>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <FooterLP3 />
        </div>
    )
}

export default HireSupport