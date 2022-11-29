import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(13);

const groups = ['A', 'B', 'C'];
const eventTypes = ['workshop', 'exam', 'lecture'];
const getRandomValue = (array, index) => array[index];
const getRandomAverage = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.helpers.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: getRandomAverage,
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.helpers.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    grades: () => [
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
      {
        subject: 'Marketing',
        average: getRandomAverage(),
      },
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
  event: {
    id: primaryKey(faker.datatype.uuid),
    type: () => getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.helpers.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Sobczak',
    login: () => 'teacher@studybuddy.com',
    password: () => 'Test123!',
  },

  note: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'lorem ipsum dolor sit amet',
    content: () => 'lorem ipsum dolor sit amet',
  },
});
