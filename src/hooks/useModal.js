import { createContext, useState, useContext } from 'react';

const ModalContext = createContext({});
export const ModalProvider = ({ children }) => {
  const [isOpen, setModalState] = useState(false);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return <ModalContext.Provider value={{ handleOpenModal, handleCloseModal, isOpen }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw Error('useModal needs to be inside ModalContext');
  }
  return modal;
};
