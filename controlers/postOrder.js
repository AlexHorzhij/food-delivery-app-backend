const Orders = require('../models/orderSchema');
// const { Conflict } = require('http-errors');

const add = async (req, res, next) => {
  console.log('req: ', req);
  const result = await Orders.create({
    ...req.body,
  });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: result,
    message: 'Contact added',
  });
};

module.exports = add;
