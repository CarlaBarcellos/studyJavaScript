angular.module('App', [])
.controller('MainController', ['$scope', '$filter', function ($scope, $filter) {
  $scope.todos = [];

  $scope.newTitle = '';
  
  $scope.addTodo = function () {
    $scope.todos.push({
      title: $scope.newTitle,
      done: false
    });

    $scope.newTitle = "";
  };

  $scope.filter = {
    done: { done: true },
    remaining: { done: false }
  };
  $scope.currentFilter = {};

  $scope.changeFilter = function ( filter ){
    $scope.currentFilter = filter;
    console.log("change ", $scope.currentFilter);
  };

  var where = $filter('filter');
  $scope.$watch('todos', function(todos){

    var length = todos.length;

    $scope.allCount = length;
    $scope.doneCount = where(todos, $scope.filter.done).length;
    $scope.remainingCount = length - $scope.doneCount;

  }, true);

  // Edit Mode
  var originalTitle;
  $scope.editing = null;

  $scope.editTodo = function( todo ){
    originalTitle = todo.title;
    $scope.editing = todo;
    console.log('editTodo');
  };



  // Debug
$scope.todos.push({
  title: "Hello",
  done: false
});
$scope.todos.push({
  title: "World",
  done: true
});
  // $scope.doneCount = 3;
}])
.directive('mySelect', [function(){
  return function (scope, $l, attrs) {
    scope.$watch(attrs, mySelect, function(val){
      if (val) {
        $el[0].select();
      }
    });
  };
}]);
