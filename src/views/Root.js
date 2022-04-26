import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList title="Users List" />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
