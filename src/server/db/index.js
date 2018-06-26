const mongoose = require('mongoose');

mongoose.connect('mongodb://nick:levi123@ds219191.mlab.com:19191/react-graphql-mongo-template');
mongoose.Promise = global.Promise;

const db = mongoose.connection;

mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));
