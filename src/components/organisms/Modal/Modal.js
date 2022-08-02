import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import ModalWrapper from './Modal.styles';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const Modal = ({ handleClose, isOpen, student, children }) => {
  return createPortal(
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {/* <StudentDetails student={student} /> */}
      {children}
      <Button onClick={handleClose}>Save</Button>
    </ModalWrapper>,
    document.getElementById('modal-container')
  );
};

export default Modal;
