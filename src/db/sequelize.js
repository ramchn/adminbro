/* eslint-disable no-console */
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST_NAME,
    dialect: 'mssql',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: console.log,
    dialectOptions: {
      useUTC: true,
      options: { requestTimeout: 300000 },
    },
  },
);

module.exports = sequelize;
