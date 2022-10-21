import React from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';
import { useNotification } from 'hooks/useNotification';
import PropTypes from 'prop-types';

const Notification = () => {
  const { handleClose, handleTitleType, notifications } = useNotification();

  if (notifications) {
    return notifications.map(({ id, type, message }) => {
      const title = handleTitleType(type);
      return (
        <Wrapper type={type} key={id}>
          <StyledTitle type={type}>{title}</StyledTitle>
          <StyledLabel>{message}</StyledLabel>
          <CloseButton onClick={handleClose} type={type} />
        </Wrapper>
      );
    });
  } else return null;
};

Notification.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Notification;
