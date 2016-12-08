app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'template/home.html',
    })
    .state('config', {
      url: '/config',
      templateUrl: 'template/config.html',
    });
});
