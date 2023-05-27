const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const getAll = require('./controlers/getShops');
const add = require('./controlers/postOrder');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get('/', getAll);
app.post('/orders', add);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server errror' } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
