const express = require('express')
const mongoose = require('mongoose');
const AdminBro = require('admin-bro')
const options = require('./admin.options')
const buildAdminRouter = require('./admin.router')

const app = express()
const port = 3000

const run = async () => {  
  try {
    const mongooseDb = await mongoose.connect('mongodb://localhost:27017/adminbro');
    const admin = new AdminBro({
      databases: [mongooseDb],
      options
    })
    const router = buildAdminRouter(admin)
    app.use(admin.options.rootPath, router)
    app.listen(port, () => console.log(
      `Example app listening at http://localhost:${port}`
    ))
  } catch (error) {
    console.log(error)
  }  
}

module.exports = run