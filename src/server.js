'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger);

app.get('/', logger, (req, res, next) => {
  res.status(200).send('Welcome to main route!');
});

app.get('/person', logger, validator, (req, res, next) => {
  const name = `${req.query.name}`;
  const outgoing = { name };
  res.send(outgoing);
});

function start() {
  app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
}

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
