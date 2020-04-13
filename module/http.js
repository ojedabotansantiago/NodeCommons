const http = require('http');
const server = http.createServer((req, res) => {
  createServer(req, res);
});

const createServer = (req, res) => {
  if (req.url === '/') {    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
    res.write('hellow world');
    res.end();
  }
};
class httpServer {
  constructor() {}
    
  createConnection() {
    server.on('connection', (socket) => {
      console.log('nueva conexion detectada');
    });
  }
  listen() {
    server.listen(2012);
    console.log('server listen on 2012');
  }
}

exports.httpServer = new httpServer();
