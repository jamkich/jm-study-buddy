import React from 'react';
import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Label } from 'components/atoms/Label/Label';
import Title from 'components/atoms/Title/Title';

const Wrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  border: 1px solid;
  border-top: 8px solid ${({ theme, type }) => theme.colors.error};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xm};
  position: relative;
  padding: 15px;
`;

const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.error};
  margin-top: -5px;
`;

const StyledLabel = styled(Label)`
  font-size: 14px;
  padding: 10px;
  font-weight: normal;
  padding: 0;
  margin-top: -5px;
`;

const CloseButton = styled(DeleteButton)`
  position: absolute;
  top: 5px;
  left: 80%;
  background-color: ${({ theme, type }) => theme.colors.type};
  width: 25px;
  height: 25px;
  /* border-radius: 7px; */
`;

const Notification = ({ type, message }) => {
  const types = {
    success: {
      type: 'success',
      title: 'Success! 😎',
    },
    error: {
      type: 'error',
      title: 'Oops! ☹️',
    },
    info: {
      type: 'info',
      title: 'Info, ',
    },
    warning: {
      type: 'warning',
      title: 'Warning...',
    },
  };

  return (
    <Wrapper>
      <StyledTitle>{type === 'error' ? 'Oops!' : null}</StyledTitle>
      <StyledLabel>{message}</StyledLabel>
      <CloseButton />
    </Wrapper>
  );
};

export default Notification;
