import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';
import Modal from 'components/organisms/Modal/Modal';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Modal />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
