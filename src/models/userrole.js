const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

class UserRole extends Sequelize.Model {

}

UserRole.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    roleId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Role',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'UserRole',
  },
);

module.exports = UserRole;
