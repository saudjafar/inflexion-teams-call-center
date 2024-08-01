import React, { createContext, useState, useContext } from 'react';
import { Modal } from 'antd';
import ModalCloseIcon from '../assets/svgs/modal-close-icon.svg'
import Modal1 from '../components/HireSupport/Modal1';
import Modal2 from '../components/HireSupport/Modal2';
import Modal3 from '../components/HireSupport/Modal3';
import Modal4 from '../components/HireSupport/Modal4';
import Modal5 from '../components/HireSupport/Modal5';
import { Progress } from 'antd'
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        closeIcon={<img src={ModalCloseIcon} />}
      >
        {/* <span>ello</span> */}
        {currentPage != 5 && (

          <div style={{ width: '560px', position: 'absolute', top: '4.5rem', left: '39rem' }}>
            <Progress percent={progressPercentage} showInfo={false} size={[560, 14]} />
          </div>

        )}
        {/* <iframe
          src="https://www.inflexionteams.com/widget/booking/lMSeODtAYjcbBcyn9NfG"
          style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden', borderRadius: "2rem" }}
          id="DQoQteMGz1DcQmJgX0A1_1722264306880"
        ></iframe> */}
        {renderPageContent(currentPage)}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
