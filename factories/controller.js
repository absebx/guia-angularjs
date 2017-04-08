angular.module("todoApp",["LocalStorageModule"])
  .factory('toDoService',function(){
    var toDoService = {};
    return toDoService();
  })
  .controller("todoController",function($scope,$http,localStorageService){
    $scope.name="abner";
    $scope.newActv={};
    if(localStorageService.get("todolist")){
      $scope.todo = localStorageService.get("todolist");
    }

    $scope.addActv = function(){
      $scope.todo.push($scope.newActv);
      $scope.newActv={};
    }

    $scope.clean = function(){
      $scope.todo = [];
    }

    $scope.$watchCollection("todo",function(newValue,oldValue){
      localStorageService.set("todolist",$scope.todo);
    });
  });
