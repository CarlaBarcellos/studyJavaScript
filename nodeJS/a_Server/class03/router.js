exports.route = route;

function route(handle, pathname){

  if( typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log('No request handler found for ' + pathname);
    return '404 Not Found';
  }
}