var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
  '/': requestHandlers.start,
  '/start': requestHandlers.start,
  '/pwd': requestHandlers.pwd,
  '/find': requestHandlers.find,
  '/upload': requestHandlers.upload
};

server.start(router.route, handle);