import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import ModalWrapper from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  });

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close </Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
