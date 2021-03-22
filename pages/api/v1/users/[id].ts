import { asyncEndpoint } from 'lib/middleware';
import db from 'db/models';

const usersRouter = async (req, res) => {
  if (req.method === 'GET') {
    const user = await db.Users.findByPk(req.query.id);

    if (!user) {
      throw {
        status: 404,
        message: 'User not found',
      };
    }
    res.status(200).send(user);
  } else {
    res.status(404).json({ error: { message: 'Not found' } });
  }
};

const route = async (req, res) => {
  await asyncEndpoint(req, res, usersRouter);
};

export default route;
  