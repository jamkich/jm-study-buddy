import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { store } from 'store/index';
import { Provider } from 'react-redux';

export const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};
