/* eslint-disable no-console */
const sequelize = require('../db/sequelize');
const user = require('./user');
const role = require('./role');
const userrole = require('./userrole');

const db = {};

db[user.name] = user;
db[role.name] = role;
db[userrole.name] = userrole;

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.Sequelize = sequelize;

module.exports = db;
