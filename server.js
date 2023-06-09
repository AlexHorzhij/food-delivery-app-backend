const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log('Server running. Use our API on port: 3001');
    });
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
