angular.module("todoApp",["LocalStorageModule"])
  .factory('ToDoService',function(localStorageService){
    var toDoService = {};

    toDoService.key = "todolist";
    //se mueve la logica de creacion del objeto al servicio
    if(localStorageService.get(toDoService.key)){
      toDoService.activities = localStorageService.get(toDoService.key);
    }else{
      toDoService.activities = [];
    }

    toDoService.add = function(newActv){
      toDoService.activities.push(newActv);
      toDoService.updateLocalStorage();
    }

    toDoService.updateLocalStorage = function(){
      localStorageService.set(toDoService.key,toDoService.activities);
    }

    toDoService.clean = function(){
      toDoService.activities = [];
      toDoService.updateLocalStorage();
      return toDoService.activities;
    }

    toDoService.getAll = function(){
      return toDoService.activities;
    }

    toDoService.removeItem = function(item){
      toDoService.activities = toDoService.activities.filter(function(activity){
        //si el resultado es verdadero se guarda, si da falso se quita
        //por eso se invierte la logica, se tienen que quedar los que son diferentes
        return activity !== item;
      });
      toDoService.updateLocalStorage();
      return toDoService.getAll();
    }

    return toDoService;
  })
  .controller("todoController",function($scope,$http,ToDoService){
    $scope.name="abner";
    $scope.newActv={};
    $scope.todo=ToDoService.getAll();

    $scope.addActv = function(){
      ToDoService.add($scope.newActv);
      $scope.newActv={};
    }

    $scope.clean = function(){
      $scope.todo = ToDoService.clean();
    }

    $scope.removeActv = function(item){
      $scope.todo =ToDoService.removeItem(item);

    }
  });
