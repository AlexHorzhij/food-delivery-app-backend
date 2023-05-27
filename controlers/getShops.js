const Dishes = require('../models/dishSchema');

const getAll = async (req, res, next) => {
  const result = await Dishes.find();

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getAll;
