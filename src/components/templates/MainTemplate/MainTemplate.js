import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';
import Modal from 'components/organisms/Modal/Modal';
import { useSelector } from 'react-redux';

const MainTemplate = ({ children }) => {
  const { isModalOpen } = useSelector((store) => store.modal);

  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <Modal isOpen={isModalOpen} />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
