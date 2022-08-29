import React, { useState, useCallback, useEffect } from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Notification = () => {
  const { notifications } = useSelector((state) => state.notification);
  // const [notification, setNotification] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const handleClose = useCallback(() => {
    setIsShow(false);
    console.log(isShow);
  }, [isShow]);

  useEffect(() => {
    if (notifications.length) {
      // setNotification(notifications[notifications.length - 1]);
      setIsShow(true);
      setTimeout(() => {
        handleClose();
      }, 8000);
      console.log(notifications);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  // appElement={document.getElementById('root')}

  return notifications.map(({ id, type, message }) => {
    const title = handleTitleType(type);

    return (
      <Wrapper type={type} isShow={isShow} key={id}>
        <StyledTitle type={type}>{title}</StyledTitle>
        <StyledLabel>{message}</StyledLabel>
        <CloseButton onClick={handleClose} type={type} />
      </Wrapper>
    );
  });
};

Notification.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Notification;
