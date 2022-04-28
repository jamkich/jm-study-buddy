import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import Wrapper from './MainTemplate.style';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
);

export default MainTemplate;
