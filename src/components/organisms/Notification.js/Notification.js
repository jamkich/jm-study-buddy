import React from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';
import PropTypes from 'prop-types';

const Notification = ({ type, message, title }) => {
  return (
    <Wrapper type={type}>
      <StyledTitle type={type}>{title}</StyledTitle>
      <StyledLabel>{message}</StyledLabel>
      <CloseButton type={type} />
    </Wrapper>
  );
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Notification;
