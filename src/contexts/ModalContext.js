import React, { createContext, useState, useContext, useEffect } from 'react';
import { Modal } from 'antd';
import ModalCloseIcon from '../assets/svgs/modal-close-icon.svg'
import Modal1 from '../components/HireSupport/Modal1';
import Modal2 from '../components/HireSupport/Modal2';
import Modal3 from '../components/HireSupport/Modal3';
import Modal4 from '../components/HireSupport/Modal4';
import Modal5 from '../components/HireSupport/Modal5';
import '../styles/ModalContext.scss'
import { Progress } from 'antd'
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [isModalVisible, setIsModalVisible] = useState(false);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = "https://engage.inflexionteams.com/widget/booking/lMSeODtAYjcbBcyn9NfG";
    iframe.style.display = 'none';
    iframe.onload = () => setIframeLoaded(true);
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  const [progressPercentage, setProgressPercentage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const showModal = () => {
    setIsModalVisible(true);
    setCurrentPage(1);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setProgressPercentage(25);
  };



  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setProgressPercentage((prev) => (prev + 25 <= 100 ? prev + 25 : 100));
    }
  };

  const previousPage = () => {
    if (currentPage === 1) {
      setIsModalVisible(false);
    }
    else {
      setCurrentPage(currentPage - 1);
      setProgressPercentage((prev) => (prev - 25 >= 25 ? (prev - 25) : 25));
    }
  }

  const handleSubmit = () => {
    console.log('Form submitted');
    setIsModalVisible(false); // Close the modal after submission
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
    <ModalContext.Provider value={{ isModalVisible, showModal, handleCancel }}>
      {children}
      <Modal
        className='test-name'
        centered
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<img src={ModalCloseIcon} style={{ position: 'relative' }} />}
      >
        {/* CUSTOM FORM  */}
        {/* 
        <>
          {currentPage !== 5 && windowWidth > 1250 && (
            <div style={{ width: '560px', position: 'absolute', top: '4.5rem', left: '48%' }}>
              <Progress percent={progressPercentage} showInfo={false} size={{ height: 14 }} />
            </div>
          )}

          {currentPage !== 5 && windowWidth <= 1250 && (
            <div style={{ width: '80%', position: 'relative', top: '6rem', left: '50%', transform: 'translateX(-50%)' }}>
              <Progress percent={progressPercentage} showInfo={false} size={{ height: 14 }} />
            </div>
          )}
        </> */}
        {/* Adjust the styling as per your requirement for window width <= 1250px */}
        {/* {renderPageContent(currentPage)} */}

        {iframeLoaded ? (
          <iframe
            src="https://engage.inflexionteams.com/widget/booking/lMSeODtAYjcbBcyn9NfG"
            title='Managed CX Form'
            style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden', borderRadius: "2rem" }}
            id="ID_HERE"
          ></iframe>
        ) : (
          <p>Loading...</p>
        )}

        {/* <iframe src="https://engage.inflexionteams.com/widget/booking/lMSeODtAYjcbBcyn9NfG"
          title='Managed CX Form'
          style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden', borderRadius: "2rem", zIndex: '10', position: 'relative' }}
          id="DQoQteMGz1DcQmJgX0A1_1722891192297">
        </iframe> */}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
