const jwt = require('../lib/jwt')

function auth (request, response, next) {
  console.log('AUTH MIDDLEWARE')
  const { authorization: token } = request.headers
  console.log('token', token)

  try {
    const decodedToken = jwt.verify(token)
    console.log('decodedToken:', decodedToken)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'unauthorized'
    })
  }
}
module.exports = auth
