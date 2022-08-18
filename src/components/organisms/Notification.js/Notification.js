import React from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';

export const types = {
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

const Notification = ({ type, message, title }) => {
  return (
    <Wrapper type={type}>
      <StyledTitle type={type}>{title}</StyledTitle>
      <StyledLabel>{message}</StyledLabel>
      <CloseButton type={type} />
    </Wrapper>
  );
};

export default Notification;
