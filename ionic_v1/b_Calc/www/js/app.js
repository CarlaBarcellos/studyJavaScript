// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', [
  'ionic',
  'LocalStorageModule'
  ])

// .run(function($ionicPlatform,$ionicModal) {
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
// Addition - Koji

app.config(function(localStorageServiceProvider) {
  localStorageServiceProvider
   .setPrefix('starter-todo');
});

app.controller('main',
  function($scope, $ionicModal, localStorageService, $location){
    // functions
    $scope.go = _go;

  // configure the ionic modal before use
  $ionicModal.fromTemplateUrl('/template/new-task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.newTaskModal = modal;
  });

  // defining functions
  function _go(path){
    $location.path(path);
  }

  $scope.openTaskModal = function(){
    $scope.newTaskModal.show();
  };
  $scope.closeTaskModal =function(){
    $scope.newTaskModal.hide();
  };
});