var http = require('http');
var url = require('url');

exports.start = start;

function start(route, handle){
  http.createServer(onRequest).listen(8888);
  console.log('Server started.');

  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    var content = route(handle, pathname);
    
    response.writeHead(
      200, {'Content-Type': 'text/plain'}
      );
    response.write(content);
    response.end();
  }
}