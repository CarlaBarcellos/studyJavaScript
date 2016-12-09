angular.module('App', [])
.controller('mainController', ['$scope', function($scope){

  // functions
  $scope.go       = _go;
  $scope.addNum   = _addNum;
  $scope.addSign  = _addSign;
  $scope.addPoint = _addPoint;
  $scope.clearAll = _clearAll;
  $scope.equal = _equal;
  state = {
    "setStandBy" : function(){
      $scope.calc.state = "standBy";
    },
    "setResult" : function(){
      $scope.calc.state = "result";
    },
    "standBy" : function(){
      return "standBy";
    },
    "result" : function(){
      return "result";
    }
  };

  // init
  $scope.clearAll();

  // defining functions
  function _go(path){
    $location.path(path);
  }

  function _clearAll(){
    $scope.calc = {
      "state"  : "standBy",
      "sign"   : "",
      "display": '0',
      "stuck"  : 0
    };
    console.log("clearAll");
  }

  function _addNum(num){
    if ($scope.calc.state === state.result() ) {
      $scope.calc.display = num;
      state.setStandBy();
    }
    if ($scope.calc.display !== '0') {
      $scope.calc.display += num;
    }else{
      $scope.calc.display = num;
    }
    console.log("addNum: ", num);
  }

  function _addSign(sign){
    $scope.calc.sign = sign;
    if ($scope.calc.stuck === 0) {
      $scope.calc.stuck = +$scope.calc.display;
      $scope.calc.display = '0';
    }
  }

  function _equal(){
    if (!!!$scope.calc.sign) {
      return;
    }

    var res = result();
    _clearAll();
    $scope.calc.display = res + '';
    state.setResult();
    console.log('state: ', $scope.calc.state);
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
    switch($scope.calc.sign){
      case '+':
        res = $scope.calc.stuck + Number($scope.calc.display);
        break;
      case '-':
        res = $scope.calc.stuck - +$scope.calc.display;
        break;
      case '×':
        res = $scope.calc.stuck * +$scope.calc.display;
        break;
      case '÷':
        res = $scope.calc.stuck / +$scope.calc.display;
        break;
    }
    return res;
  }


}]);