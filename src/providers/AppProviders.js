import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { darkTheme, lightTheme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { store } from 'store/index';
import { Provider } from 'react-redux';
import { useDarkMode } from 'hooks/useDarkMode';

export const AppProviders = ({ children }) => {
  const [theme] = useDarkMode();

  const checkTheme = () => {
    if (theme === 'light') return lightTheme;
    return darkTheme;
  };

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={checkTheme}>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};
