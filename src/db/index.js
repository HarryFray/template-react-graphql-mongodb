const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.DB_PASS);
mongoose.Promise = global.Promise;

mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));
