const mongoose = require('mongoose')

const DB_USER = 'NoeAvila'
const DB_PASSWORD = 'sofia2688'
const DB_HOST = '7a-generacion-xw5aa.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
