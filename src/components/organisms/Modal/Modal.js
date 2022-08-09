import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import ModalWrapper from './Modal.styles';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());
  const student = useSelector(({ student }) => student);
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <ModalWrapper appElement={document.getElementById('root')} onRequestClose={handleClose} isOpen={isOpen}>
      <StudentDetails student={student} />
      {children}
      <Button onClick={handleClose}>Save</Button>
    </ModalWrapper>
  );
};

export default Modal;
