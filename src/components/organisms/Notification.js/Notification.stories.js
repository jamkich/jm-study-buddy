import Notification from './Notification';

export default {
  title: 'Components/Components/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Default = Template.bind({});

export const ErrorNotification = Template.bind({});
ErrorNotification.args = {
  type: 'error',
  message: 'Something went wrong..... Try again. ',
};
