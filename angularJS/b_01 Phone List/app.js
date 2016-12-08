angular.module('App', [])
.controller('mainController', ['$scope', function($scope){
  $scope.users = [];
  $scope.addUser = function(user){
    $scope.users.push(angular.copy(user));
    user.name = "";
    user.tel = "";
  };
}]);