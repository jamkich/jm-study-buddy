import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

const createStudents = () => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });

  for (let i = 1; i < 15; i++) {
    db.student.create();
  }
};

createStudents();

window.mocks = {
  getStudents: () => db.student.getAll(),
  getGroups: () => db.group.getAll(),
};
