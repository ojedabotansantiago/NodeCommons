const http = require('http');
const server = http.createServer((req, res) => {
  handlerPetitions(req, res);
});

const handlerPetitions = (req, res) => {
  if (req.url == '/') {
    getHome(req, res);
  } else if (req.url == '/cars') {
    getCars(req, res);
  } else {
    notFound(req, res);
  }
};
const notFound = (req, res) => {
  res.statusCode = 404;
  res.write('no encontrado');
  res.end('ko');
};
const getHome = (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'works';
  res.write('<h1> hallow App</h1>');
  res.end();
};
const getCars = (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'works';
  res.write('<h1> hallow cars</h1>');
  res.end();
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
