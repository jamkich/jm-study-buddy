import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from 'store';

export const useNotification = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);

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

  return { notifications, handleClose, handleTitleType };
};
