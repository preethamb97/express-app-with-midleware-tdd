const Sequelize = require('sequelize');
const { MYSQL_SETTINGS } = require('../config/settings');
const mysqlDB = new Sequelize(MYSQL_SETTINGS.DB, MYSQL_SETTINGS.USER, MYSQL_SETTINGS.PASSWORD, {
  host: MYSQL_SETTINGS.HOST,
  dialect: MYSQL_SETTINGS.dialect,
  operatorsAliases: false,
  logging: true,
  pool: {
    max: MYSQL_SETTINGS.pool.max,
    min: MYSQL_SETTINGS.pool.min,
    acquire: MYSQL_SETTINGS.pool.acquire,
    idle: MYSQL_SETTINGS.pool.idle
  }
});

// mysqlDB.sync({ force: true });

module.exports = {
  mysqlDB
};