var 
  // formidable = require('formidable'),
  http = require('http'),
  url = require('url');
  // sys = require('sys');

exports.start = start;

function start(route, handle){
  http.createServer(onRequest).listen(8888);
  console.log('--- Server Started ---');

  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname);
    route(handle, pathname, response, request);
  }

}