import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
  const { signOut } = useAuth();

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
      <StyledLink as="a" onClick={signOut}>
        <p>Logout</p>
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
