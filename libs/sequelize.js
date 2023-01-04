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
let sequelize = null;

function setupDatabase(optionsDb) {
  if (!sequelize) {
    sequelize = new Sequelize(databaseUrl, optionsDb);
  }
  return sequelize;
}

setupModels(setupDatabase(options));

module.exports = setupModels;
