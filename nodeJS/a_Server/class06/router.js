module.exports.route = route;

function route(handle, pathname, response, request){
  console.log('Request for:', pathname);
  if( typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/plain'} );
    response.write('404 Not found');
    response.end();
  }
}