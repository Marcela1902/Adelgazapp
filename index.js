const server = require('./src/server.js')
const db = require('./src/lib/db')

async function mainDevelopment () {
  await db.connectDevelopment()
  console.log('-DB CONNECTED-')
  server.listen(8082, () => {
    console.log('SERVER IS RUNNING')
  })
}

/* async function mainProductions () {
  await db.connectProductions()
  console.log('-DB CONNECTED-')
  server.listen(8082, () => {
    console.log('SERVER IS RUNNING')
  })
} */

mainDevelopment()
  .then(() => {
    console.log('SERVER IS READY')
  })
  .catch(error => console.error('ERROR:', error))

/* mainProductions()
  .then(() => {
    console.log('SERVER IS READY')
  })
  .catch(error => console.error('ERROR:', error))
 */