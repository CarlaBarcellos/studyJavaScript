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
// app.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('modal', {
//       // url: 'template/new-task-modal.html',
//       templateUrl: 'template/new-task-modal.html',
//       controller: 'MainController'
//     });
//   $urlRouterProvider.otherwise("/");
// });

app.config(function(localStorageServiceProvider) {
  localStorageServiceProvider
   .setPrefix('starter-todo');
});
var taskData;
app.controller('main',
  function($scope, $ionicModal, localStorageService){
    
    function saveData(){
      localStorageService.set(taskData, $scope.tasks);
    }

  // configure the ionic modal before use
  $ionicModal.fromTemplateUrl('template/new-task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.newTaskModal = modal;
  });

  $scope.openTaskModal = function(){
    $scope.newTaskModal.show();
  };
  $scope.closeTaskModal =function(){
    $scope.newTaskModal.hide();
  };

  $scope.getTasks = function(){
    if (localStorageService.get(taskData)) {
      $scope.tasks = localStorageService.get(taskData);
    }else{
      $scope.tasks = [];
    }
  };

  $scope.createTask = function(task){
    console.log(task);
    $scope.tasks.push(angular.copy(task));
    localStorageService.set(taskData, $scope.tasks);
    $scope.newTaskModal.hide();
    $scope.task ={};
  };

  $scope.removeTask = function(index){
    $scope.tasks.splice(index, 1);
    saveData();

  };

  $scope.completeTask = function(index){
    $scope.tasks[index].completed = true;
    saveData();
  };

  // function saveData() {
  //   localStorageService.set(taskData, $scope.tasks);
  // }
});