



angular.module('App', [])
.controller('mainController', ['$scope', function($scope){

  $scope.tasks = [
    {"name": "Amy quoit", "done": true},
    {"name": "reascendancy umbrel", "done": true},
    {"name": "observability fattily", "done": false},
    {"name": "cartilaginous precounsellor", "done": true},
    {"name": "substratose faultily", "done": false}
  ];

  $scope.addNew = function() {
  	$scope.tasks.push({
  		"name": $scope.newTaskName,
  		"done": false
    });
  	$scope.newTaskName = "";
  };

  $scope.doneCount = function() {
  	var count = 0;
    angular.forEach($scope.tasks, function(task){
      count += task.done ? 1 : 0;
    });
  	return count;
  };

  $scope.deleteDone = function() {
    var oldTasks = $scope.tasks;
    $scope.tasks = [];
    angular.forEach(oldTasks, function(task){
      if (task.done === false) {
        $scope.tasks.push(task);
      }
    });
  };
}]);