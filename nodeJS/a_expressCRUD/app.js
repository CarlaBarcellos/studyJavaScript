'use strict';
const
  // dependencies
  express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'), 
  session = require('express-session'),
  methodOverride = require('method-override'),
  logger = require('morgan'),
  csrf = require('csurf'),
  // posts
  post = require('./routes/post'),
  app = express();

// settings
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(logger('Dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(function(err, req, res, next){
  res.send(err.message);
});
// csrf
app.use(cookieParser());
app.use(session({secret: '123456ynp;zvk'}));
app.use(csrf( {cookie: true} ));
app.use(function(req, res, next){
  res.locals.csrftoken = req.csrfToken();
  next();
});




// Routing
app.get('/', post.index);
app.get('/posts/new', post.new);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/:id/edit', post.edit);
app.post('/posts/create', post.create);
app.put('/posts/:id/', post.update);
app.delete('/posts/:id', post.destroy);


app.listen(3000);
console.log('server starting..');