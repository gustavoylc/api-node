const { config } = require('../config');

module.exports = {
  development: {
    url: config.dbDevUrl,
    dialect: 'postgres',
    logging: (msg) => console.log(msg)
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
