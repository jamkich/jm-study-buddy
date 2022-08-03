import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import ModalWrapper from './Modal.styles';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store';

const Modal = ({ isOpen, children }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());
  const student = useSelector((state) => state.student);

  // return createPortal(
  //   <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
  //     <StudentDetails student={student} />
  //     {children}
  //     <Button onClick={handleClose}>Save</Button>
  //   </ModalWrapper>,
  //   document.getElementById('modal-container')
  // );

  return (
    <ModalWrapper appElement={document.getElementById('root')} onRequestClose={handleClose} isOpen={isOpen}>
      <StudentDetails student={student} />
      {children}
      <Button onClick={handleClose}>Save</Button>
    </ModalWrapper>
  );
};

export default Modal;
