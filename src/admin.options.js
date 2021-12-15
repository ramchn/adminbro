const AdminBro = require('admin-bro');
const AdminBroSequelize = require('admin-bro-sequelize');

AdminBro.registerAdapter(AdminBroSequelize);

const options = {
};

module.exports = options;
