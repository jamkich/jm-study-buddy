import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import ModalWrapper from './Modal.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Save</Button>
    </ModalWrapper>
  );
};

export default Modal;
