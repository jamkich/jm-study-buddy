import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(13);

const groups = ['A', 'B', 'C'];
const eventTypes = ['workshop', 'exam', 'lecture'];
const getRandomValue = (array, index) => array[index];
const getRandomAverage = () => faker.number.int({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.string.uuid),
    name: () => faker.helpers.fake('{{person.firstName}} {{person.lastName}}'),
    attendance: () => `${faker.number.int({ min: 0, max: 100 })}`,
    average: getRandomAverage,
    group: () => getRandomValue(groups, faker.number.int({ min: 0, max: 2 })),
    course: () => faker.helpers.fake('{{company.buzzAdjective}} {{company.buzzNoun}}'),
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
    id: primaryKey(faker.string.uuid),
    type: () => getRandomValue(eventTypes, faker.number.int({ min: 0, max: 2 })),
    group: () => getRandomValue(groups, faker.number.int({ min: 0, max: 2 })),
    subject: () => faker.helpers.fake('{{company.buzzAdjective}} {{company.buzzNoun}}'),
    date: faker.date.soon,
  },
  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Sobczak',
    login: () => 'teacher@studybuddy.com',
    password: () => 'Test123!',
  },

  note: {
    id: primaryKey(faker.string.uuid),
    title: () => 'lorem ipsum dolor sit amet',
    content: () => 'lorem ipsum dolor sit amet',
  },
});
