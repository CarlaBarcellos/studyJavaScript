
var http = require("http");

exports.start = start;

function start(){
  console.log("Server started.");
  http.createServer(onRequest).listen(8888);

  function onRequest(request, response){
    console.log("Request recieved.");
    response.writeHead(
      200,
      {"Content-Type": "text/plain"}
      );
    response.write("Hello World");
    response.end();
  }
}