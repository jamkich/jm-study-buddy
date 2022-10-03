import React from 'react';
import { Wrapper, StyledTitle, StyledLabel, CloseButton } from './Notification.styles';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from 'store';

const Notification = () => {
  const { notifications } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    // TODO
    // write reducer which delete noti from store
    dispatch(removeNotification(notifications[notifications.length - 1]));
  };

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
