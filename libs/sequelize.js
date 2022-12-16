const { Sequelize } = require('sequelize');
const { config } = require('../config');
const setupModels = require('../db/models');

let databaseUrl = config.dbDevUrl;
const options = {
  dialect: 'postgres',
  logging: !config.prod ? (msg) => console.log(msg) : false,
};
if (config.prod) {
  databaseUrl = config.dbUrl;
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
const sequelize = new Sequelize(databaseUrl, options);
setupModels(sequelize);

module.exports = sequelize;
