var posts = [
  {title: 'Rwanda', body: 'presbytery torridly yammadji Tibbu join bonavist deditician haplosis tomatillo Veadar bemean uphill bombardier spectacularly portitor putridly grittiness diuturnity cautioner stallenger coolheaded bulginess autotrophy whoopee'},
  {title: 'Gabon', body: 'coinventor freewoman tangalung Clinopodium trochleariform pseudohypertrophy outpaint Nuba incomposed merostome pleurenchymatous nondidactic melt verbenaceous picary schepen abscisse passionfulness Chionanthus mintage preadvancement coder refoment wafty'},
  {title: 'Chile', body: 'sawder regreet underyield offendedly nervation hypericism ichneutic nightlong nonascertainable Felis bricklaying amphiscii Dictograph demirep befrounce removable quadrivalency bryozoan eschatological nest incorporatedness barquantine taborin overinflative'},
  {title: 'Vatican City', body: 'unintelligentsia whalelike preremuneration tarkeean grigri untangibly colorrhaphy termen ridgebone plumemaker forisfamiliate pledget faddy talipedic glomerular unrecountable Monostomatidae echowise rubato sawsharper goutiness befall define manas'},
  {title: 'Djibouti', body: 'nondecadent sulphogel characinoid attrition sarcomatosis eying upgird terbium Blenniiformes barbarism grummeter banter tyrannizingly coalesce supersympathy wrongish rhematology prehesitate personage proctocystotomy unvenomous repersuasion overcurious nephroid'},
];

module.exports.index = function(req, res) {
  res.render('posts/index', {posts: posts});
}

module.exports.show = function(req, res) {
  res.render('posts/show', {post: posts[req.params.id]});
}

module.exports.new = function(req, res) {
  res.render('posts/new');
}

module.exports.create = function(req, res) {
  var post = {
    title: req.body.title,
    body: req.body.body
  }
  posts.push(post);
  res.redirect('/');
}

module.exports.edit = function(req, res) {
  res.render(
    'posts/edit',
    { post: posts[req.params.id], id: req.params.id}
  );
}

module.exports.update = function(req, res, next) {
  if(req.params.id !== req.body.id){
    next(new Error('ID not valid'));
  }else{
    posts[req.body.id] = {
      title: req.body.title,
      body: req.body.body
    }
    res.redirect('/');
  }
}
module.exports.destroy = function(req, res) {
  if(req.params.id !== req.body.id){
    next(new Error('ID not valid'));
  }else{
    posts.splice(req.body.id, 1);
    res.redirect('/');
  }
}