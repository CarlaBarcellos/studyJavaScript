angular.module('myapp', [])
.controller('mainCtrl', ['$scope', function($scope){
  $scope.users = [
  {"name":"koji", "score": 30},
  {"name":"marcio", "score": 20},
  {"name":"walker", "score": 10},
  {"name":"kojiMarcio", "score": 40},
  {"name":"marcioKoji", "score": 70},
  {"name":"walkerKoji", "score": 60},
  ];
}]);