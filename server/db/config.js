const { join } = require('path');

const path = {
  dialect: 'sqlite',
  storage: join(__dirname, 'main.db'),
};

module.exports = {
  development: path,
  test: path,
  production: path
};
