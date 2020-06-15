const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.USER_DEV
const DB_USER_PROD = process.env.USER_PROD
const DB_PASSWORD = process.env.PASSWORD_DEV
const DB_PASSWORD_PROD = process.env.PASSWORD_PROD
const DB_HOST = process.env.HOST_DEV
const DB_HOST_PROD = process.env.HOST_PROD
const DB_NAME = process.env.NAME_DEV
const DB_NAME_PROD = process.env.NAME_PROD
const urlProd = `mongodb+srv://${DB_USER_PROD}:${DB_PASSWORD_PROD}@${DB_HOST_PROD}/${DB_NAME_PROD}`
const urlDev = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

console.log(urlDev)
console.log(urlProd)

function connectDevelopment () {
  mongoose.connect(urlDev, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}
function connectProductions () {
  mongoose.connect(urlProd, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connectDevelopment,
  connectProductions
}
