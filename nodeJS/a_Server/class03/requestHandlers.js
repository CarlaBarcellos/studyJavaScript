exports.start = start;
exports.upload = upload;

function sleep(milliSeconds){
  var startTime = new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
}

function start() {
  console.log('Request handler "start" ');
  sleep(10000);
  return 'hello';
}

function upload() {
  console.log('Request handler "upload" ');
  return 'upload';
}
