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
  function($scope, $ionicModal, localStorageService, $location, $sce){
  
  // functions
  $scope.go       = _go;
  $scope.addNum   = _addNum;
  $scope.addSign  = _addSign;
  $scope.addPoint = _addPoint;
  $scope.clearAll = _clearAll;
  $scope.equal    = _equal;
  state = {
    "StandBy" : 0,
    "Result"  : 1
    };
  Sign = {
    "add": "&plus;",
    "sub": "&minus;",
    "mul": "&times;",
    "div": "&divide;",
  };

  // init
  $scope.mul = $sce.trustAsHtml('&times;');
  _clearAll();

  // defining functions
  function _go(path){
    $location.path(path);
  }

  function _clearAll(){
    $scope.calc = {
      "state"  : state.StandBy,
      "sign"   : "",
      "display": '0',
      "stuck"  : 0
    };
    console.log("clearAll");
  }


  function _addNum(num){
    if ($scope.calc.state === state.Result ) {
      $scope.calc.display = num;
      $scope.calc.state =  state.StandBy;
      return;
    }
    if ($scope.calc.display !== '0') {
      $scope.calc.display += num;
    }else{
      $scope.calc.display = num;
    }
    // console.log("addNum: ", num); // Debug
  }

  function _addSign(sign){
    if ($scope.calc.stuck === 0) {
      $scope.calc.sign = $sce.trustAsHtml( Sign[sign] );
      $scope.calc.stuck = Number($scope.calc.display);
    }else{
      $scope.calc.stuck = result();
      $scope.calc.sign = $sce.trustAsHtml( Sign[sign] );
    }
    $scope.calc.display = '0';
  }

  function _equal(){
    if (!!!$scope.calc.sign) {
      return;
    }

    var res = result();
    _clearAll();
    $scope.calc.display = res + '';
    $scope.calc.state = state.Result;
    console.log($scope.calc.state);
  }

  function _addPoint(){
    if ( !~$scope.calc.display.indexOf('.')) {
      $scope.calc.display += '.';
      console.log("addPoint");
    }else{
      console.log("ignore: addPoint");
    }
  }

  function result(){
    var res;
    switch( $scope.calc.sign.valueOf() ){
      case Sign.add:
        res = $scope.calc.stuck + Number($scope.calc.display);
        break;
      case Sign.sub:
        res = $scope.calc.stuck - Number($scope.calc.display);
        break;
      case Sign.mul:
        res = $scope.calc.stuck * Number($scope.calc.display);
        break;
      case Sign.div:
        res = $scope.calc.stuck / Number($scope.calc.display);
        break;
    }
    return res;
  }
});