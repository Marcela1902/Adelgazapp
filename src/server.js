const express = require('express')
const cors = require('cors')

const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const dishesRouter = require('./routes/dishes')
const eatingPlanRouter = require('./routes/eatingPlan')
const ingredientsRouter = require('./routes/ingredients')
const physicalDetails = require('./routes/physicalDetails')
const dietsRouter = require('./routes/diets')
const directionRouter = require('./routes/direction')
const shoppingCart = require('./routes/shoppingCart')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/diets', dietsRouter)
app.use('/direction', directionRouter)
app.use('/dishes', dishesRouter)
app.use('/eatingPlan', eatingPlanRouter)
app.use('/ingredients', ingredientsRouter)
app.use('/physicalDetails', physicalDetails)
app.use('/shoppingCart', shoppingCart)

app.use((request, response, next) => {
  console.log(`>[${request.method}] ${request.url} body:${JSON.stringify(request.body)}`)
  console.log()
  next()
})
// app.set('port', process.env.PORT || 8080)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
