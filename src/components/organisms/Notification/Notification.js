import React, { useState, useCallback } from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Notification = () => {
  const { notifications } = useSelector((state) => state.notification);
  const [{ type, message }, setNotification] = useState({ type: '', message: '' });
  const [isShow, setIsShow] = useState(false);

  useCallback(() => {
    const handleClose = () => {
      setIsShow(false);
      console.log(isShow);
    };
    if (notifications.length) {
      setNotification(notifications[notifications.length - 1]);
      setIsShow(true);
      setTimeout(() => {
        handleClose();
      }, 8000);
    }
  }, [notifications]);

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
  // appElement={document.getElementById('root')}

  return isShow ? (
    <Wrapper type={type} isShow={isShow}>
      <StyledTitle type={type}>{title}</StyledTitle>
      <StyledLabel>{message}</StyledLabel>
      <CloseButton onclick={() => handleClose()} type={type} />
    </Wrapper>
  ) : null;
};

Notification.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Notification;
