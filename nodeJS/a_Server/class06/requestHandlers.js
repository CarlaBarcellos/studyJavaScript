var querystring = require('querystring'),
  formidable = require('formidable'),
  fs = require('fs');

module.exports = {
  start: start,
  upload: upload,
  show: show
};

function start(response){
  console.log('Request handler "start"');

  var body =
    '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, request) {
  console.log('Request handler "upload"');

  var form = new formidable.IncomingForm();

  form.parse(request, function(err, fields, files){
    fs.rename(files.upload.path, './tmp/test.png', function(err){
      if(err){
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, './tmp/test.png');
      }

      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(
        'recieved imgage: <br>' +
        '<img src="/show">');
      response.end();
    });
  });
}

function show(response){
  console.log('Request handler "show"');
  fs.readFile('./tmp/test.png', 'binary', function(err, file){
    if(err){
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(err + '\n');
    } else {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(file, 'binary');
    }
    response.end();
  });
}