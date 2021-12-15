const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

class Role extends Sequelize.Model {

}

Role.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roleName: Sequelize.STRING,
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Role',
  },
);

module.exports = Role;
