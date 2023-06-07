import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from 'store';

export const useNotification = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);

  const handleClose = () => {
    dispatch(removeNotification(notifications[notifications.length - 1]));
  };

  const handleTitleType = (type) => {
    switch (type) {
      case 'ERROR':
        return 'Oops! 😒';
      case 'SUCCESS':
        return 'Success! 😎';
      case 'INFO':
        return 'Info!';
      case 'WARNING':
        return 'Warning...';
      default:
        return 'Default';
    }
  };
  const handleColorType = (theme, type) => {
    switch (type) {
      case 'ERROR':
        return theme.colors.error;
      case 'SUCCESS':
        return theme.colors.success;
      case 'INFO':
        return theme.colors.info;
      case 'WARNING':
        return theme.colors.warning;
      default:
        return 'black';
    }
  };

  return { notifications, handleClose, handleTitleType, handleColorType };
};
