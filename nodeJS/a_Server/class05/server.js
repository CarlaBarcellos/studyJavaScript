var http = require('http');
var url = require('url');

exports.start = start;

function start(route, handle){
  http.createServer(onRequest).listen(8888);
  console.log('Server started.');

  function onRequest(request, response){
    var postData = '';
    var pathname = url.parse(request.url).pathname;

    request.setEncoding('utf-8');

    request.addListener('data', function(postDataChunk){
      postData += postDataChunk;
      console.log('Recieved POST data chunk: "'+
                   postDataChunk + '".');
    });
    request.addListener('end', function(){
      route(handle, pathname, response, postData);
    });

  }
}