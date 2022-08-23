import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';
import Modal from 'components/organisms/Modal/Modal';
import Notification from 'components/organisms/Notification/Notification';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
      <Modal />
      <Notification type="success" message="User has been succesfully deleted." />
    </Wrapper>
  );
};

export default MainTemplate;
