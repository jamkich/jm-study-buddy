import { rest } from 'msw';
import { db } from 'mocks/db';

export const students = [
  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudent = db.student.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      if (!matchingStudent) {
        return res(
          ctx.status(404),
          ctx.json({
            error: 'No matching student',
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          student: matchingStudent,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students: db.student.getAll(),
      })
    );
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = db.student.findMany({
      where: {
        name: {
          contains: req.body.inputValue,
        },
      },
    });
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
  rest.delete('/students', (req, res, ctx) => {
    if (req.body.id) {
      const removedStudent = db.student.delete({
        where: {
          id: {
            equals: req.body.id,
          },
        },
      });
      return res(ctx.status(200), ctx.json({ removedStudent }));
    }
    return res(ctx.status(400), ctx.json({ error: 'Provide ID of removed student' }));
  }),
];
