import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
