
var http = require("http");
var url = require("url");

exports.start = start;

function start(route){
  console.log("Server started.");
  http.createServer(onRequest).listen(8888);

  function onRequest(request, response){
    console.log("Request recieved.");

    var pathname = url.parse(request.url).pathname;
    route(pathname);
    
    response.writeHead(
      200,
      {"Content-Type": "text/plain"}
      );
    response.write("Hello World");
    response.end();
  }
}
