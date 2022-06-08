import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

export default {
  title: 'Components/Molecules/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
        course: 'Economy and finances',
        grades: [
          {
            subject: 'Modern Economy',
            grade: '3.4',
          },
          {
            subject: 'Trade and Logistics',
            grade: '4.1',
          },
          {
            subject: 'Business Philosophy',
            grade: '5.0',
          },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
