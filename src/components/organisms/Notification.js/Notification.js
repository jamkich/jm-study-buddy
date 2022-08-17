import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  border-top: 3px solid ${({ theme }) => theme.colors.error};
`;

const Notification = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
      <Button>Close</Button>
    </Wrapper>
  );
};

export default Notification;
