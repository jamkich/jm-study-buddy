import React from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';
import PropTypes from 'prop-types';

const Notification = ({ type, message }) => {
  const handleTitleType = (type) => {
    switch (type) {
      case 'error':
        return 'Oops! 😒';
      case 'success':
        return 'Success! 😎';
      case 'info':
        return 'Info!';
      case 'warning':
        return 'Warning...';
      default:
        return 'black';
    }
  };

  const title = handleTitleType(type);
  return (
    <Wrapper appElement={document.getElementById('root')} type={type}>
      <StyledTitle type={type}>{title}</StyledTitle>
      <StyledLabel>{message}</StyledLabel>
      <CloseButton type={type} />
    </Wrapper>
  );
};

Notification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  title: PropTypes.string,
};
export default Notification;
