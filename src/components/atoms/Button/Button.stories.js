import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Read more</Button>;

export const Default = Template.bind({});
Default.args = {
  isBig: false,
};

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
