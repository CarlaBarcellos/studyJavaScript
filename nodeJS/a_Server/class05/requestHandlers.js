exports.start = start;
exports.upload = upload;
// var exec = require('child_process').exec;

// function sleep(milliSeconds){
//   var startTime = new Date().getTime();
//   while(new Date().getTime() < startTime + milliSeconds);
// }

function start(response, postData){
  console.log('Request handler "start"');

  var body =
    '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.write(body);
    response.end();
}

function upload(response, postData) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('you\'ve sent: ' + postData);
  response.end();
}
