angular.module('App', [])
.controller('mainController',[
  '$sce',
  function($sce){
  var calc = this;

  // functions
  calc.addNum   = _addNum;
  calc.addSign  = _addSign;
  calc.addPoint = _addPoint;
  calc.clearAll = _clearAll;
  calc.equal    = _equal;
  var State = {
    "StandBy" : 0,
    "Result"  : 1
    };
  var Sign = {
    "add": "&plus;",
    "sub": "&minus;",
    "mul": "&times;",
    "div": "&divide;",
  };

  // init
  calc.mul = $sce.trustAsHtml('&times;');
  _clearAll();

  // defining functions
  function _clearAll(){
    calc.status = {
      "state"  : State.StandBy,
      "sign"   : "",
      "display": '0',
      "stuck"  : 0
    };
    console.log("clearAll");
  }


  function _addNum(num){
    if (calc.status.state === State.Result ) {
      calc.status.display = num;
      calc.status.state =  State.StandBy;
      return;
    }
    if (calc.status.display !== '0') {
      calc.status.display += num;
    }else{
      calc.status.display = num;
    }
    // console.log("addNum: ", num); // Debug
  }

  function _addSign(sign){
    if (calc.status.stuck === 0) {
      calc.status.sign = $sce.trustAsHtml( Sign[sign] );
      calc.status.stuck = Number(calc.status.display);
    }else{
      calc.status.stuck = result();
      calc.status.sign = $sce.trustAsHtml( Sign[sign] );
    }
    calc.status.display = '0';
  }

  function _equal(){
    if (!!!calc.status.sign) {
      return;
    }

    var res = result();
    _clearAll();
    calc.status.display = res + '';
    calc.status.state = State.Result;
    console.log(calc.status);
  }

  function _addPoint(){
    if ( !~calc.status.display.indexOf('.')) {
      calc.status.display += '.';
      console.log("addPoint");
    }else{
      console.log("ignore: addPoint");
    }
  }

  function result(){
    var res;
    switch( calc.status.sign.valueOf() ){
      case Sign.add:
        res = calc.status.stuck + Number(calc.status.display);
        break;
      case Sign.sub:
        res = calc.status.stuck - Number(calc.status.display);
        break;
      case Sign.mul:
        res = calc.status.stuck * Number(calc.status.display);
        break;
      case Sign.div:
        res = calc.status.stuck / Number(calc.status.display);
        break;
    }
    return res;
  }
}]);