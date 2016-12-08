
var http = require("http");


http.createServer(Server).listen(8888);

function Server(request, response){
  log("Request recieved.");
  response.writeHead(
    200,
    {"Content-Type": "text/plain"}
    );
  response.write("Hello World");
  response.end();
}


function log(obj){
  console.log(obj);
}