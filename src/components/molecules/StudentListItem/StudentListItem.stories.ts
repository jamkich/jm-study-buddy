import StudentListItem from './StudentListItem';

export default {
  title: 'Components/Molecules/StudentListItem',
  component: StudentListItem,
};

const Template = (args) => <StudentListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  studentData: {
    name: 'Jakub Michalik',
    attendance: '35%',
    average: '2.3',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  id: '32131',
  studentData: {
    name: 'Jakub Michalik',
    attendance: '35%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  studentData: {
    name: 'Jakub Michalik',
    attendance: '35%',
    average: '4.2',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  studentData: {
    name: 'Jakub Michalik',
    attendance: '35%',
    average: null,
  },
};
