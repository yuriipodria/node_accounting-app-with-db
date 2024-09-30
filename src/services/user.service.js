const {
  models: { User },
} = require('../models/models');
const { getNewId } = require('../utils/getNewId');

const get = async () => {
  return User.findAll();
};

const getById = async (id) => {
  return User.findByPk(id);
};

const create = async (name) => {
  const id = getNewId(await get());

  return User.create({ id, name });
};

const update = async (id, name) => {
  // eslint-disable-next-line no-unused-vars
  const [_, updatedRecords] = await User.update(
    { name },
    { where: { id }, returning: true },
  );

  return updatedRecords[0];
};

const remove = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
