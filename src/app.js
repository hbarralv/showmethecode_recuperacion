// Carga de módulos
const http = require('http')
const fs = require('fs')
const path = require('path')
const router = require('./routes/routes')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
  router(req, res)
})

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`)
})
