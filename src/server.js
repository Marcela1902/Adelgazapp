const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/post')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/posts', postsRouter)

app.use((request, response, next) => {
  console.log(`>[${request.method}] ${request.url} body:${JSON.stringify(request.body)}`)
  console.log()
  next()
})

app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
