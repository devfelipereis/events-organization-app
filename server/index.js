import mongoose from 'mongoose';

// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = 'mongodb://mongo:27017/events-organization';
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });

// mongoose events
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
mongoose.connection.once('open', () => {
  console.log('Connected to mongoose');
});

// let's start the server
app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});
