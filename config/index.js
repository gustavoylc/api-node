require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  prod: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
};

module.exports = { config };
