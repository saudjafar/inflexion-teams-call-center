import React, { createContext, useState, useContext } from 'react';
import { Modal } from 'antd';
import ModalCloseIcon from '../assets/svgs/modal-close-icon.svg'
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <iframe
          src="https://www.inflexionteams.com/widget/booking/lMSeODtAYjcbBcyn9NfG"
          style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden', borderRadius: "2rem" }}
          id="DQoQteMGz1DcQmJgX0A1_1722264306880"
        ></iframe>
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
