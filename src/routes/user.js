const UserController = require('../controllers/user')
const UserModel = require('../models/User')

function getReqData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      req.on('data', chunk => {
        body += chunk.toString()
      });
      req.on('end', () => {
        resolve(body)
      });
    } catch (error) {
      reject(error)
    }
  })
}

//CONSULTA SI EXISTE UN USUARIO Y SI NO, LO CREA//

const userRouter = async (req, res) => {
  // Consultar todos los usuarios
  if (req.url === '/users' && req.method === 'GET') {
    try {
      const users = UserController.getUsers()
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify(users))
    } catch (error) {
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 500
      res.end(JSON.stringify({ message: error }))
    }
  } else if (req.url.match(/\/users\/([0-9]+)/) && req.method === 'GET') {
    // Consultar un solo usuario
    try {
      const id = req.url.split('/')[2]
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null
      const user = UserController.getUser(idNormalized)
      if (user) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(user))
      } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.end(JSON.stringify(user))
      }
    } catch (error) {
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 500
      res.end(JSON.stringify({ message: error }))
    }
  } else if (req.url === '/users' && req.method === 'POST') {
    // Crear un usuario
    const body = await getReqData(req)
    const userBody = JSON.parse(body)
    const userCreated = UserController.createUser(userBody)
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200;
    res.end(JSON.stringify(userCreated))
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

module.exports = userRouter