import { rest } from 'msw';
import { db } from 'mocks/db';
import { faker } from '@faker-js/faker';

export const notes = [
  rest.get('/notes', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ notes: db.note.getAll() }));
  }),
  rest.post('/notes', (req, res, ctx) => {
    if (req.body.title && req.body.content) {
      console.log('MSW: ', req.body);
      const newNote = {
        id: faker.datatype.uuid(),
        title: req.body.title,
        content: req.body.content,
      };

      db.note.create(newNote);

      return res(
        ctx.status(201),
        ctx.json({
          note: newNote,
        })
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        error: 'Every note should have title and content',
      })
    );
  }),
];
