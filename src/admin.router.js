const AdminBro = require('admin-bro');
const { buildRouter } = require('admin-bro-expressjs');
const express = require('express');

const buildAdminRouter = (admin) => buildRouter(admin);

module.exports = buildAdminRouter;
