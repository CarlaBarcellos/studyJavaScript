angular.module('App', [])
.controller('mainController',[
  '$scope', '$sce',
  function($scope, $sce){

  // functions
  $scope.go       = _go;
  $scope.addNum   = _addNum;
  $scope.addSign  = _addSign;
  $scope.addPoint = _addPoint;
  $scope.clearAll = _clearAll;
  $scope.equal    = _equal;
  state = {
    "StandBy" : 0,
    "Result" : 1
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
    $scope.calc.sign = $sce.trustAsHtml( Sign[sign] );

    if ($scope.calc.stuck === 0) {
      $scope.calc.stuck = Number($scope.calc.display);
      $scope.calc.display = '0';
    }else{
      var res = result();
      _clearAll();
      $scope.calc.stuck = res;
    }
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


}]);