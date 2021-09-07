const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const { sup, how } = require('./source/lib/middlewares/middleware');
const { API_PORT } = require('./source/config/settings');
const logger = require('./source/core/logger');
app.use(morgan('dev'));
app.use(helmet());
app.use(sup);
app.get('/', (req, res) => {
  res.send({ test: new Date() });
});

app.listen(API_PORT, () => {
  logger.info(`app listening on port ${API_PORT}`);
});