import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';

export const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};
