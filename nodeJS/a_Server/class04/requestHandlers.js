exports.start = start;
exports.upload = upload;
exports.pwd = pwd;
exports.find = find;
var exec = require('child_process').exec;

function sleep(milliSeconds){
  var startTime = new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
}

function pwd(response) {
  console.log('Request handler "start"');

  exec('pwd', function(error, stdout, stderr){
    response.writeHead(200, {'Content-Type': 'text/plain'} );
    response.write(stdout);
    response.end();
  });
}

function find(response) {
  console.log('Request handler "start"');

  exec('find /', function(error, stdout, stderr){
    response.writeHead(200, {'Content-Type': 'text/plain'} );
    response.write(stdout);
    response.end();
  });
}

function start(response) {
  console.log('Request handler "start"');

  exec('ls', function(error, stdout, stderr){
    response.writeHead(200, {'Content-Type': 'text/plain'} );
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Request handler "upload" ');
  response.end();
}
