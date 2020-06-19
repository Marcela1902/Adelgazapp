const server = require('./src/server.js')
const db = require('./src/lib/db')
var cfenv = require('cfenv')
// var app = express()
var appEnv = cfenv.getAppEnv()

// async function mainDevelopment () {
//   await db.connectDevelopment()
//   console.log('-DB CONNECTED-')
//   server.listen(8082, () => {
//     console.log('SERVER IS RUNNING')
//   })
// }

// server.listen(appEnv.port, appEnv.bind, function () {
//   console.log('server starting on ' + appEnv.url)
// })

async function mainProductions () {
  await db.connectProductions()
  console.log('-DB CONNECTED-')
  server.listen(8082, () => {
    console.log('SERVER IS RUNNING')
  })
}

// mainDevelopment()
//   .then(() => {
//     console.log('SERVER IS READY')
//   })
//   .catch(error => console.error('ERROR:', error))

mainProductions()
  .then(() => {
    console.log('SERVER IS READY')
  })
  .catch(error => console.error('ERROR:', error))

server.listen(appEnv.port, appEnv.bind, function () {
  console.log('server starting on ' + appEnv.url)
})
