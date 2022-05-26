const fs = require('fs')
const path = require('path')

//RENDERIZA LA PÁGINAS DE LAS SALAS//

const roomGameRouter = async (req, res) => {
  if (req.url === '/room-game' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const templatePath = path.join(__dirname, '/../views/room-game.html')
    fs.createReadStream(templatePath).pipe(res)
  }
}

module.exports = roomGameRouter