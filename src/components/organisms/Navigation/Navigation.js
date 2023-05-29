import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';
import Toggle from 'components/atoms/Toggle/Toggle';
import { useDarkMode } from 'hooks/useDarkMode';

const Navigation = () => {
  const { signOut } = useAuth();
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/notes">Notes</StyledLink>

      <Toggle theme={theme} toggleTheme={themeToggler} />

      <StyledLink as="a" onClick={signOut}>
        <p>Logout</p>
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
