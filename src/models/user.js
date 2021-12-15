const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

class User extends Sequelize.Model {

}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    emailAddress: Sequelize.STRING,
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'User',
  },
);

module.exports = User;
