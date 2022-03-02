/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const sequelize = require('./db/sequelize');
const db = require('./models');

const app = express();
const port = process.env.PORT? process.env.PORT: 3000;

const run = async () => {
  try {
    const admin = new AdminBro({
      databases: [sequelize],
      options,
    });
    const router = buildAdminRouter(admin);
    app.use(admin.options.rootPath, router);
    app.listen(port, () => console.log(
      `app listening at http://localhost:${port}`,
    ));
  } catch (error) {
    console.log(error);
  }
};

module.exports = run;
