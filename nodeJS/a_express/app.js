'use strict';
const 
  express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  app = express();

// settings
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
// app.get('/hello.txt', function(req, res){
//   res.sendfile(__dirname + '/public/hello.txt');
// });


// Custom middleware
app.use(function(req, res, next){
  console.log('my custom middleware');
  next(); // Important
});


// Routing
app.get('/', function(req, res){
  res.render('index', {title: 'title'});
});
app.get('/hello', function(req, res){
  res.send('Hello world');
});
app.get('/users/:name?', function(req, res){
  if(req.params.name){
    res.send( 'Hello ' + req.params.name);
  } else {
    res.send( 'Hello someone' );
  }
});
app.get('/items/:id([0-9]+)', function(req, res){
    res.send( 'item no: ' + req.params.id);
});
//forms
app.get('/new', function(req, res){
  res.render('new');
})
app.post('/create', function(req, res){
  res.send(req.body.name);
});


// app pram
app.param('id', function(req, res, next, id){
  const users = ['koji', 'carvalho', 'marcio'];
  req.params.name = users[id];
  next();
})
app.get('/bye/:id', function(req, res){
  res.send('bye ' + req.params.name);
});


app.listen(3000);
console.log('server starting..');