import Notification from './Notification';

export default {
  title: 'Components/Molecules/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Default = Template.bind({});

export const ErrorNotification = Template.bind({});

ErrorNotification.args = {
  title: 'Oops! 😒',
  type: 'error',
  message: 'Something went wrong..... Try again. ',
};

export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
  title: 'Success! 😎',
  type: 'success',
  message: 'User has been succesfully deleted. ',
};

export const InfoNotification = Template.bind({});
InfoNotification.args = {
  title: 'Info! ',
  type: 'info',
  message: 'Note has been added. ',
};

export const WarningNotification = Template.bind({});
WarningNotification.args = {
  title: 'Warning...',
  type: 'warning',
  message: 'Fill all required fields. ',
};
