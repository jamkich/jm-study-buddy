import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.style';
const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
    <StyledLink to="/Settings">Settings</StyledLink>
    <StyledLink to="/logout">Logout</StyledLink>
  </Wrapper>
);

export default Navigation;
