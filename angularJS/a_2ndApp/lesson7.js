angular.module('myapp', [])
.controller('mainCtrl', ['$scope', function($scope){
  $scope.users = [];
  $scope.addUser = function(){
    $scope.users.push({
      name: $scope.newUser
    });
    $scope.newUser = "";
  };
}]);