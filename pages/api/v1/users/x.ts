import db from 'db/models';

const x = async (req, res) => {
  const useR = await db.Users.findAll();
  res.status(200).send(useR);
};

export default x;
